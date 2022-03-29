import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import ProcessApiTable from "./components/ProcessApiTable"
import ProcessCoreTable from "./components/ProcessCoreTable"
import ProcessFeeTable from "./components/ProcessFeeTable"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}>
                <Route index element={<ProcessApiTable />} />
                <Route path="processcoretable" element={<ProcessCoreTable />} />
                <Route path="processfeetable" element={<ProcessFeeTable />} />
            </Route>
        </Routes>
    )
}

export default App;