const startButton = document.querySelector('#start')
startButton.addEventListener('click', async function(event) {
    console.log('%SISSY SPACEX', 'color:red;font-size: 200px;')
    
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["scripts/replace.js"],
    }).then(() => console.log('loaded!')).catch((err) => console.error('error loading replace.js', err))
})