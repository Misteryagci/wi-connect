package point

import (
	"math"
	"math/rand"
	"time"
	"fmt"
)

type Point struct  {
	X float64 `json:"x"`
	Y float64 `json:"y"`
	Color string `json:"color"`
}

func (p *Point) CreateRandom(rx,ry,radius int) {
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	p.X = (r1.Float64()*float64(rx)) + float64(radius)
	p.Y = (r1.Float64()*float64(ry)) + float64(radius)
	p.Color = "black"
}

func (p Point) ShowPoint() {
	fmt.Println(p.X)
	fmt.Println(p.Y)
}

func (p *Point) ChangeColor(nc string) {
	p.Color = nc
}

func (p Point) getX() float64 {
	return p.X
}

func (p Point) getY() float64 {
	return p.Y
}

func (p1 Point) Distance(p2 Point) float64 {
	return math.Sqrt(math.Pow(p1.X - p2.X,2) + math.Pow(p1.Y - p2.Y,2))
}
