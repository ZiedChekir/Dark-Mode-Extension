const button = document.getElementById('button');
button.addEventListener('click',  async (e) => {
    SwitchMode()
});

document.addEventListener("DOMContentLoaded",function(){
    browser.action.onClicked.addListener(SwitchMode);

})

async function SwitchMode() {
  try {
    await browser.scripting.insertCSS({
      target: {
        tabId: (await browser.tabs.getCurrent()).id,
      },
    css: `body {  background-color: black !important;}`,
     
    });
  } catch (err) {
    console.error(`failed to insert CSS: ${err}`);
  }
}
