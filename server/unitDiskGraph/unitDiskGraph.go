package unitDiskGraph

import (
	"cpa-project-server/point"
	"cpa-project-server/edge"
	"cpa-project-server/config"
	"fmt"
)

type UnitDiskGraph struct {
	Points []point.Point `json:"points"`
	Edges []edge.Edge `json:"edges"`
	MaxLength float64 `json:"maxLength"`
}

func (udg *UnitDiskGraph) SetUp(conf config.Config, ml float64) {

	for i:=0;i<conf.NbPoints;i++ {
		var p point.Point
		p.CreateRandom(conf.MaxWidth,conf.MaxHeight,conf.Radius)
		udg.Points = append(udg.Points,p)
	}

	udg.MaxLength = ml
	fmt.Printf("La taille de la liste des points %d\n",len(udg.Points))
	for i:=0;i<len(udg.Points);i++ {
		for j:=i+1;j<len(udg.Points);j++ {
			fmt.Printf("i = %d j = %d La distance actuel %f\n",i,j,udg.Points[i].Distance(udg.Points[j]))
			if udg.Points[i].Distance(udg.Points[j]) <= udg.MaxLength {
				fmt.Println("Found two points in the range ")
				udg.Edges = append(udg.Edges,edge.Edge{Destination:udg.Points[j],Source:udg.Points[i]})
			}
		}
	}
}

