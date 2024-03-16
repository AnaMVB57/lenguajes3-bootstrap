package com.anavillanueva.practicaClase;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Parqueadero {
	
	@GetMapping("/parking")
	public String mostrar() {
		return "index";
	}

}
