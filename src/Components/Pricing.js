import React, { useContext, useEffect, useState } from "react";
import Context  from "./Context/Context";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Pricing=()=>{
    const {theme,ligthTheme,darkTheme} = useContext(Context);
    const [isDark,setDark] = useState(false);
  
    function change(){  
      if(isDark){
        ligthTheme();
      }
      else{
        darkTheme();
      }
      let curr = !isDark;
      setDark(curr);
      localStorage.setItem("isDark",curr);
    }
  
    useEffect(() => {
        let currt = localStorage.getItem("isDark");
        if (currt === null || currt === undefined) {
          currt = false; // or use system preference as discussed earlier
        }
        setDark(currt === "true");
        if (currt === "true") {
          darkTheme();
        } else {
          ligthTheme();
        }
      }, []);
      

    return(
        <div style={{margin:"20px 0px"}}>
            <div style={{textAlign:"right",marginRight:"25px",marginTop:"15px"}}>
            {
                isDark?
                (
                        <span onClick={change} style={{cursor:"pointer"}}>
                        <FaToggleOn size={40}/>
                        </span>
                )
                :
                (
                    <span onClick={change} style={{cursor:"pointer"}}>
                        <FaToggleOff size={40}/>
                    </span>
                )
            }
            </div>
            <div style={theme} className="price-container">
                <div>
                    <div className="price-items">
                        <h2 className="heading heading-price">API Pricing</h2>
                        <p>
                            Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
                        </p>

                    <div>
                        <table className="price-table">
                            <thead>
                                <tr>
                                    <th>
                                        API
                                    </th>
                                    <th>
                                        MODEL
                                    </th>
                                    <th>
                                        PRICE PER 1k TOKENS
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                    OpenAI
                                    </td>
                                    <td>
                                        GPT-3.5
                                    </td>
                                    <td>
                                        $0.002
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    OpenAI
                                    </td>
                                    <td>
                                        GPT-4
                                    </td>
                                    <td>
                                        $0.03
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    Together AI
                                    </td>
                                    <td>
                                    Llama-2-70b
                                    </td>
                                    <td>
                                    $0.0008
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    Together AI
                                    </td>
                                    <td>
                                    Llama-2-13b
                                    </td>
                                    <td>
                                    $0.0006
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                    <div className="price-items">
                        <h3 className="heading">
                        Token Estimation
                        </h3>
                        <p>
                        On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
                        </p>
                    </div>
                    <div className="price-items">
                        <h3 className="heading">
                            Billing
                        </h3>
                        <p>
                        You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
                        </p>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
export default Pricing;