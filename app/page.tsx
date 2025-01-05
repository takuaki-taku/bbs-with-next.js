
import BBSCardList from "./components/BBSCardList";
import { BBSData } from "./types/types";


async function getBBSAllData(){
  const response = await fetch("/api/post", {
    cache: "no-store",
  });
  
  const bbsAllData: BBSData[] = await response.json();
  
  return bbsAllData; 
}

export default async function Home() { 
  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}

