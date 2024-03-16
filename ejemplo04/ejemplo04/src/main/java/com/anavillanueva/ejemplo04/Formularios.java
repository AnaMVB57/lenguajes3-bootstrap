package com.anavillanueva.ejemplo04;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Formularios {

	@GetMapping(value = "/principal")
	public String Calculo() {
		
		return "ingreso";
	}
	
}
