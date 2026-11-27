import { serverApi } from "../../lib/config";
import { Product, ProductInquiry } from "../../lib/types/product";
import axios from "axios";

class OrderService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }
}
export default OrderService;
