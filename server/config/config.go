package config

import "fmt"

type Config struct {
	MaxWidth  int `json:"maxWidth"`
	MaxHeight int `json:"maxHeight"`
	Radius    int `json:"radius"`
	NbPoints  int `json:"nbPoints"`
}

func (c Config) ShowAll() {
	fmt.Println(c.MaxHeight)
	fmt.Println(c.MaxWidth)
	fmt.Println(c.Radius)
	fmt.Println(c.NbPoints)
}
