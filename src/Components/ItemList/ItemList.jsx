import "./ItemList.css";

import { useEffect, useState } from "react";

//FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { query, collection, getDocs } from "firebase/firestore";

const ItemList = () => {

    const [itemsData, setItemsData] = useState([]);

    useEffect( () => {
        const getItems = async () =>{
            const q = query ( collection( db,"items" ));
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot);
        };

        getItems();
    },[]);

    return(
        <div>
            <h1>Firebase</h1>
        </div>
    );
};

export default ItemList;