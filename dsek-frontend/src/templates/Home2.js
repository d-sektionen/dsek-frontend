import React, { useEffect } from "react";
import { getData2 } from "../utils/NetFuncs";

export default function Home2() {


    useEffect(() => {
        (async () => {
            const data = await getData2("posts");
            console.log(data);
        })();
    }, []);


    return (
        <>
            <div className="Home">
                <div className="wide">
                    {/* <SideNav /> */}
                </div>
                <div className="Middle" id="pageContainer">
                    Posts
                    {/* {users && users.map(user =>
                        </tr>
                    )} */}

                </div>
                {/* <div className="wide">
                    < Sponsors />
                    < BackToTop />
                </div> */}
                {/* < BackToTop /> */}
            </div>
        </>
    );
}

