// no need to import it into page.tsx or any place , it integrates by itself
//anither new feature of NEXT , 
export default function (){
    return <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  </div>
}