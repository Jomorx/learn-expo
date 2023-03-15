import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "../components/Themed";

const search = () => {
  const [searchInfo,setSearchInfo] = useState()
  useEffect(()=>{
    axios.get("https://api.chucknorris.io/jokes/random").then(res=>{
        setSearchInfo(res.data)
    })
  },[])
  return (
    <View>
      <Text>{searchInfo?.value}</Text>
    </View>
  );
};

export default search;
