import Queue from '../datastructures/queue.js';

export default class BFS {

    static search(grid) {

        let queue = new Queue();
        let searched = [];
        let checkEnd = false;
        let adjX = [-1, 1, 0, 0];
        let adjY = [0, 0, 1, -1];

        queue.add(grid.getStartPos());

        while ((!queue.isEmpty()) && (!checkEnd)) {
        
            let temp = queue.poll();
            let visited = [];
        
            for (let i = 0; i < adjX.length; i++) {
        
                let x = temp.X + adjX[i];
                let y = temp.Y + adjY[i];
                let pos = { X: x, Y: y };

                if (this.isValid(grid.getDims(), pos)) {
                    if ((grid.getNode(pos).isEnabled()) ||  (grid.getNode(pos).isEnd())){
                        if (!grid.getNode(pos).isVisited()) {
                            visited.push(pos);
                            grid.getNode(pos).setVisited(true, temp);
                            if (grid.getNode(pos).isEnd()) {
                                checkEnd = true;
                                break;
                            }
                            queue.add(pos);
                        }
                    }
                }
            }
            if (visited.length != 0) {
                searched.push(visited);
            }
        }
        
        animate(searched.flat());
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