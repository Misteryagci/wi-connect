package edge

import "cpa-project-server/point"

type Edge struct {
	Source point.Point `json:"src"`
	Destination point.Point `json:"destination"`
}

func (e Edge) Length() float64 {
	return e.Destination.Distance(e.Source)
}
