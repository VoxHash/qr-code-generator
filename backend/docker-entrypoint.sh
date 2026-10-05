#!/bin/sh
set -e

wait_for_postgres() {
  echo "Waiting for PostgreSQL..."
  until node -e "
    const net = require('net');
    const host = process.env.POSTGRES_HOST || 'postgres';
    const port = Number(process.env.POSTGRES_PORT || 5432);
    const s = net.createConnection({ host, port }, () => { s.end(); process.exit(0); });
    s.on('error', () => process.exit(1));
    s.setTimeout(3000, () => { s.destroy(); process.exit(1); });
  "; do
    sleep 2
  done
  echo "PostgreSQL is accepting connections."
}

wait_for_postgres

echo "Syncing Prisma schema (db push)..."
npm run db:push

exec "$@"
