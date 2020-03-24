echo "(1/4) Fetching updated repositories..."
rm -rf /tmp/deploy-site/
mkdir /tmp/deploy-site/
cd /tmp/deploy-site/
git clone https://github.com/jesus-r-mendoza/Portfolio.git
git clone https://github.com/jesus-r-mendoza/jesus-r-mendoza.github.io.git
echo "(2/4) Installing npm & yarn dependencies..."
cd Portfolio
npm install
yarn install
echo "(3/5) Transferring git history..."
rm -rf .git
cp -r ../jesus-r-mendoza.github.io/.git/ Portfolio/.git/
echo "(4/5) Publishing static content..."
npm run deploy
echo "(5/5) Removing tmp directories..."
cd ~
rm -rf /tmp/deploy-site/
echo Done.