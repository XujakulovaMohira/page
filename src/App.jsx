import "./App.css";

import AppList from "./Applist";
import Profiles from "./components/Profiles";

import FetchData from "./components/FechtData";
import { useEffect, useState } from "react";
import Paging from "./components/Paging";

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    FetchData(currentPage).then((result) => {
      setUsers(result.data);
      setCurrentPage(result.page);
      setTotalPages(result.total_pages);
    });
  }, [currentPage]);

  return (
    <div className="App">
     <div className="applist">
     <AppList />
     </div>
      <div className="gender">
        <Paging
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
        <Profiles users={users} />
      </div>
    </div>
  );
}

export default App;
