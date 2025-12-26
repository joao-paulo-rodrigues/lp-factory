#!/bin/bash

# LP Factory Deploy Script
# Usage: ./deploy.sh

set -e

echo "🚀 Deploying LP Factory..."

# Build and restart
docker-compose down || true
docker-compose build --no-cache
docker-compose up -d

echo "✅ LP Factory deployed!"
echo ""
echo "📊 Status:"
docker-compose ps

echo ""
echo "🌐 Sites ativos:"
echo "  - carrinhoabandonado.com.br"
echo "  - lp-*.robotizese.com.br (preview)"
echo ""
echo "📝 Para adicionar nova LP:"
echo "  1. Crie pasta em src/sites/novasite/"
echo "  2. Adicione index.tsx"
echo "  3. Registre em src/App.tsx"
echo "  4. Adicione rota no docker-compose.yml"
echo "  5. Execute ./deploy.sh"
