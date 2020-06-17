import PriorityQueue from '../datastructures/priorityqueue.js';
import HashMap from '../datastructures/hashmap.js';

export default class A_Star {
    static search(grid) {
        let open = new PriorityQueue();
        let g_cost = new HashMap();
        let visited = [];
        
        let adjX = [-1, 1, 0, 0];
        let adjY = [0, 0, 1, -1];

        let cost = (pos, g_cost) => {
            return this.dist(grid.getEndPos(), pos) + g_cost;
        };

        {
            let s = grid.getStartPos();
            g_cost.update(s, 0);
            open.add(s, cost(s, 0));
        }

        while (!open.isEmpty()) {
            let current = open.poll();

            if (!grid.getNode(current).isStart()) {
                visited.push(current);
            }

            grid.getNode(current).close();            
            if (grid.getNode(current).isEnd()) {
                break;
            }
            for (let i = 0; i < adjX.length; i++) {
                let adj = { X: current.X + adjX[i], Y:  current.Y + adjY[i] };
                if (this.isValid(grid.getDims(), adj)) {
                    if ( (grid.getNode(adj).isEnabled()) || (grid.getNode(adj).isEnd())  ){
                        if (!grid.getNode(adj).isVisited()) {
                            const new_cost = g_cost.get(current) + 1;
                            if (open.contains(adj)) {
                                if (g_cost.get(adj) > new_cost) {
                                    g_cost.update(adj, new_cost); 
                                    grid.getNode(adj).setPrev(current);
                                    open.remove(adj);
                                    open.add(adj, cost(adj, new_cost));
                                }
                            } else {
                                g_cost.update(adj, new_cost); 
                                grid.getNode(adj).setPrev(current);
                                open.add(adj, cost(adj, new_cost));
                            }
                        }
                    }
                }
            }
        }
        animate(visited);
    }

    static cost(startPos, endPos, pos) {
        return this.dist(startPos, pos) + this.dist(endPos, pos);
    }

    static dist(p1, p2) {
        return Math.abs(p2.X - p1.X) + Math.abs(p2.Y - p1.Y);
    }

    static isValid(dims, pos) {
        if ((pos.X >= 0) && (pos.X < dims.cols)) {
            if ((pos.Y >= 0) && (pos.Y < dims.rows)) {
                return true;
            }
        }
        return false;
    }
}