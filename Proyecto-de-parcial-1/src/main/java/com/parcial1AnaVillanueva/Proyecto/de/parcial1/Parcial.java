package com.parcial1AnaVillanueva.Proyecto.de.parcial1;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Parcial {
	
	@GetMapping("/parcial")
	public String mostrar() {
		return "index";
	}
}
