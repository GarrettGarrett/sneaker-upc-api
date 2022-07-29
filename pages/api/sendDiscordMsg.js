
async function sendMessage(content, webhookUrl, sneaker) {
    var myHeaders = new Headers();
    myHeaders.append("authority", "discord.com");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-US,en;q=0.9");
    myHeaders.append("content-type", "application/json");
    myHeaders.append("origin", "https://dev.to");
    myHeaders.append("referer", "https://dev.to/");
    myHeaders.append("sec-ch-ua", "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "cross-site");

        var raw = JSON.stringify({
        username: "sneakerscan.io",
        content: content,
        avatar_url: sneaker?.image ? sneaker?.image : "",
      
    })
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    var messageDiscord =  await fetch(webhookUrl, requestOptions)

    console.log("🚀 ~ file: StockXSold.js ~ line 282 ~ sendWebhookStockXSold ~ messageDiscord.status", messageDiscord.status)

    return messageDiscord.status
        }

export default async (req, res) => {
    
    if (req.method === 'POST') {

        if (req?.body?.content && req?.body?.webhookUrl) {
                let response = await sendMessage(req?.body?.content, req?.body?.webhookUrl, req?.body?.sneaker)

                return res.status(200).json({ response })
           
            }
        }    
    }



