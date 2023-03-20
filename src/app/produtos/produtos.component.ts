import { Component, OnInit } from '@angular/core';
import { remult } from 'remult';
import { Produtos } from 'src/shared/Produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {
  produtosRepo = remult.repo(Produtos)
  produtoss: Produtos[] = []

  codigoBarras = ""
  nomeProduto = ""
  valorProduto = ""
  quantidadeProduto =""
  tipoProduto = ""



  async addProdutos() {
    try {
      const newProdutos = await this.produtosRepo.insert({ codigoBarras: this.codigoBarras, nomeProduto: this.nomeProduto, valorProduto: this.valorProduto,quantidadeProduto: this.quantidadeProduto, tipoProduto: this.tipoProduto})
      this.produtoss.push(newProdutos)
      this.codigoBarras = ""
      this.nomeProduto = ""
      this. valorProduto = ""
      this.quantidadeProduto =""
      this.tipoProduto = ""
    } catch (error: any) {
      alert(error.message)
    }
  }


async saveProdutos(produtos: Produtos) {
  try {
    await this.produtosRepo.save(produtos)
  } catch (error: any) {
    alert(error.message)
  }
}
// src/app/todo/todo.component.ts

async deleteProdutos(produtos: Produtos) {
  await this.produtosRepo.delete(produtos);
  this.produtoss = this.produtoss.filter(t => t !== produtos);
}



ngOnInit() {
  this.produtosRepo.find().then((items) => (this.produtoss = items));
}


}



