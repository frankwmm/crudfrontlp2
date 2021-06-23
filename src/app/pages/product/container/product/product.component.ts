import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../../../../providers/products/products.service";
import { Product } from "../../models/product";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ProductNewComponent } from "../../components/forms/product-new/product-new.component";
import { ProductEditComponent } from "../../components/forms/product-edit/product-edit.component";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  error: string;
  products: Product[];
  product: Product;

  constructor(
    private productService: ProductsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProduct().subscribe(
      (response) => {
        this.products = response.data;
        console.log(this.products);
      },
      (error) => {
        this.error = error;
      }
    );
  }

  public onNewProduct($event): void {
    if ($event) {
      const productForm = this.modalService.open(ProductNewComponent, {
        size: "lg",
      });
      productForm.componentInstance.title = "Nuevo Producto";
      productForm.result.then((result) => {
        this.productService.postProduct(result).subscribe(
          (response) => {
            if (response.success) {
              this.getProducts();
            }
          },
          (error) => {
            this.error = error;
          }
        );
      });
    }
  }

  public delete(id: number): void {
    this.productService.deleteProduct(id).subscribe(
      (response) => {
        if (response.success) {
          this.getProducts();
        }
      },
      (error) => {
        this.error = error;
      }
    );
  }

  edit(id: number): void {
    this.productService.getProductById(id).subscribe(
      (response) => {
        this.product = response.data;

        const productForm = this.modalService.open(ProductEditComponent, {
          size: "lg",
        });
        productForm.componentInstance.title = "Editar Producto";
        productForm.componentInstance.product = this.product;
        productForm.result.then((result) => {
          if (result) {
            this.productService
              .updateProduct(this.product.id, result)
              .subscribe(
                (resp) => {
                  if (resp.success) {
                    this.getProducts();
                  }
                },
                (error) => {
                  this.error = error;
                }
              );
          }
          console.log(result);
        });
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
