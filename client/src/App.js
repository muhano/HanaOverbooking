import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import ProcessApiTable from "./components/ProcessApiTable"
import ProcessCoreTable from "./components/ProcessCoreTable"
import ProcessFeeTable from "./components/ProcessFeeTable"
import ProcessApiForm from "./components/ProcessApiForm"
import ProcessApiEdit from "./components/ProcessApiEdit";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}>
                <Route index element={<ProcessApiTable />} />
                <Route path="processcore" element={<ProcessCoreTable />} />
                <Route path="processfee" element={<ProcessFeeTable />} />
                <Route path="processapi/create" element={<ProcessApiForm />} />
                <Route path="processapi/edit/:id" element={<ProcessApiEdit />} />
            </Route>
        </Routes>
    )
}

export default App;