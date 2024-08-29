package com.project.springWeb.controllers;

import com.project.springWeb.models.ProductModel;
import com.project.springWeb.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

//voltando a codar

@RestController
public class ProductController {

    @Autowired
    private ProductRepository acao;

    @GetMapping("/")
    public String helloWorld(){
        return "Hello World!";
    }

    @GetMapping("/exibir")
    public Iterable<ProductModel> exibir(){
        return acao.findAll();
    }

    @GetMapping("/exibir/{id}")
    public ProductModel selecionar(@PathVariable int id){
        return acao.findByid(id);
    }

    @GetMapping("/selecionar/{continente}")
    public Iterable<ProductModel> selecionarPeloContinente(@PathVariable String continente){
        return acao.findBycontinente(continente);
    }

    @PostMapping("/api")
    public ProductModel cadastrar(@RequestBody ProductModel dado){
        return acao.save(dado);
    }

    @PutMapping("/api")
    public ProductModel alterar(@RequestBody ProductModel dado){
        return acao.save(dado);
    }

    @DeleteMapping("/api/{id}")
    public void deletar(@PathVariable int id){
        ProductModel obj = selecionar(id);
        acao.delete(obj);
    }
}
