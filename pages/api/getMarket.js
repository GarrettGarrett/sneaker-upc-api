
export default async (req, res) => {
    
    
    if (req.method === 'POST') { //post stockx_id (must be parent - not size specific- because this is how scout works.) and size
        console.log(req.body)
        
        var myHeaders = new Headers();
        myHeaders.append("authority", "stockx.com");
        myHeaders.append("accept", "*/*");
        myHeaders.append("accept-language", "en-US,en;q=0.9");
        myHeaders.append("appos", "web");
        myHeaders.append("appversion", "0.1");
        myHeaders.append("authorization", "");
        myHeaders.append("if-none-match", "W/\"4434b-oVWe77Pxt3efik1nChJDKt1uyhU\"");
        // myHeaders.append("referer", "https://stockx.com/buy/air-jordan-1-retro-high-pollen?size=7");
        myHeaders.append("sec-ch-ua", "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"");
        myHeaders.append("sec-ch-ua-mobile", "?0");
        myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
        myHeaders.append("sec-fetch-dest", "empty");
        myHeaders.append("sec-fetch-mode", "cors");
        myHeaders.append("sec-fetch-site", "same-origin");
        myHeaders.append("x-requested-with", "XMLHttpRequest");
        // myHeaders.append("Cookie", "__cf_bm=quPmGLBX5ZQyJjRAD1.7Pi9hgj31639E_LOxbIJdzNw-1652567914-0-AV83iNN+rEW1xy3nX/c9uUyL2Vsx7tBrMRzgEugZNzXpYz23qpWImHhivrg6EC3hMV3lTnAy0lkQP+NOR8d9Qx0=");
        myHeaders.append("user-agent", "PostmanRuntime/7.29.0");
        // myHeaders.append("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36");
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
       
        
        let response = await fetch(`https://stockx.com/api/products/${req.body.stockx_id}?includes=market,360&currency=USD&country=US`, requestOptions)
        console.log("🚀 ~ file: getMarket.js ~ line 37 ~ response", response)

        if (response) {
            const resp_json = await response.json()
                let chldrenObject = resp_json.Product.children
                for (const [key, value] of Object.entries(chldrenObject)) {
                    if (value.market.lowestAskSize == req.body.size){
                        let lowestAsk = value.market.lowestAsk
                        return res.status(200).json({ lowestAsk })
                    }
                  }
               
            }
        } 
    }



