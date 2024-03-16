package com.anavillanueva.ejemplo03;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

//Notación que permite acceder a la clase que utilizaremos
@Controller
public class Mostrar {

//	Notación que permite acceder a la clase que utilizaremos
	@GetMapping("/")
	public String imprimir() {
		return "index";
	}
	
}
