import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import ProcessApiTable from "./components/ProcessApiTable";
import ProcessCoreTable from "./components/ProcessCoreTable"
import ProcessFeeTable from "./components/ProcessFeeTable"
import ProcessApiForm from "./components/ProcessApiForm"
import ProcessApiEdit from "./components/ProcessApiEdit";
import Login from "./pages/Login"
import ProtectedRoute from "./routes/ProtectedRoute";
import ProcessCoreForm from "./components/ProcessCoreForm";
import ProcessCoreEdit from "./components/ProcessCoreEdit";
import ProcessFeeForm from "./components/ProcessFeeForm";
import ProcessFeeEdit from "./components/ProcessFeeEdit";
import UserForm from "./components/UserForm";

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
                <Route path="processfee/create" element={<ProcessFeeForm />} />
                <Route path="processfee/edit/:id" element={<ProcessFeeEdit />} />
                <Route path="user/create" element={<UserForm />} />
            </Route>
        </Routes>
    )
}

export default App;