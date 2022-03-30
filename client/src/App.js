import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import ProcessApiTable from "./components/ProcessApiTable"
import ProcessCoreTable from "./components/ProcessCoreTable"
import ProcessFeeTable from "./components/ProcessFeeTable"
import ProcessApiForm from "./components/ProcessApiForm"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}>
                <Route index element={<ProcessApiTable />} />
                <Route path="processcoretable" element={<ProcessCoreTable />} />
                <Route path="processfeetable" element={<ProcessFeeTable />} />
                <Route path="processapitable/create" element={<ProcessApiForm />} />
            </Route>
        </Routes>
    )
}

export default App;