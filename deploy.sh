echo
echo "(1/5) Fetching updated repositories..."
echo
rm -rf /tmp/deploy-site/
mkdir /tmp/deploy-site/
cd /tmp/deploy-site/
git clone https://github.com/jesus-r-mendoza/Portfolio.git
git clone https://github.com/jesus-r-mendoza/jesus-r-mendoza.github.io.git
echo
echo "(2/5) Installing npm & yarn dependencies..."
echo
cd Portfolio
npm install
yarn install
echo
echo "(3/5) Transferring git history..."
echo
rm -rf .git
cp -r ../jesus-r-mendoza.github.io/.git/ .git/
echo
echo "(4/5) Publishing static content..."
echo
npm run deploy
echo
echo "(5/5) Removing tmp directories..."
echo
cd ~
rm -rf /tmp/deploy-site/
echo Done.