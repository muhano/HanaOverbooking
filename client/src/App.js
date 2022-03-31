import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import ProcessApiTable from "./components/ProcessApiTable"
import ProcessCoreTable from "./components/ProcessCoreTable"
import ProcessFeeTable from "./components/ProcessFeeTable"
import ProcessApiForm from "./components/ProcessApiForm"
import ProcessApiEdit from "./components/ProcessApiEdit";
import Login from "./pages/Login"
import ProtectedRoute from "./routes/ProtectedRoute";
import ProcessCoreForm from "./components/ProcessCoreForm";
import ProcessCoreEdit from "./components/ProcessCoreEdit"

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            }>
                <Route index element={<ProcessApiTable />} />
                <Route path="processcore" element={<ProcessCoreTable />} />
                <Route path="processfee" element={<ProcessFeeTable />} />
                <Route path="processapi/create" element={<ProcessApiForm />} />
                <Route path="processapi/edit/:id" element={<ProcessApiEdit />} />
                <Route path="processcore/create" element={<ProcessCoreForm />} />
                <Route path="processcore/edit/:id" element={<ProcessCoreEdit />} />
            </Route>
        </Routes>
    )
}

export default App;