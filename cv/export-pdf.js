const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const htmlPath = path.join(__dirname, 'vincere-media-works-cv.html');
  const pdfPath = path.join(__dirname, 'vincere-media-works-cv.pdf');
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: pdfPath,
    format: 'Letter',
    printBackground: true,
    margin: { top: '0.4in', right: '0.5in', bottom: '0.4in', left: '0.5in' },
  });
  await browser.close();
  console.log('PDF written:', pdfPath);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
