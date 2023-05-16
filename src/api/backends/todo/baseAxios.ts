import Axios from "axios";

import { TODO_API_BASE_URL } from "@/config";

export const todoApiBase = Axios.create({ baseURL: TODO_API_BASE_URL });
