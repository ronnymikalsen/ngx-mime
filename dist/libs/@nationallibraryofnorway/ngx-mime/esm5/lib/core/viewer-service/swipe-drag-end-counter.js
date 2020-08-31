import { Direction } from '../models/direction';
import { Side } from '../models/side';
var SwipeDragEndCounter = /** @class */ (function () {
    function SwipeDragEndCounter() {
        this.reset();
    }
    SwipeDragEndCounter.prototype.reset = function () {
        this.leftCount = 0;
        this.rightCount = 0;
    };
    /**
     * @param direction of swipe / pan
     * @param side hit by swipe
     */
    SwipeDragEndCounter.prototype.addHit = function (side, dir) {
        this.incrementSide(side);
        this.clearOppositeSideOfDragDirection(dir);
    };
    SwipeDragEndCounter.prototype.hitCountReached = function () {
        return this.leftCount >= 2 || this.rightCount >= 2;
    };
    SwipeDragEndCounter.prototype.incrementSide = function (side) {
        if (side === Side.LEFT) {
            this.leftCount++;
            this.rightCount = 0;
        }
        else if (side === Side.RIGHT) {
            this.rightCount++;
            this.leftCount = 0;
        }
    };
    /**
     * Clear opposite side if swiping in the other direction
     * @param Direction of swipe / pan
     */
    SwipeDragEndCounter.prototype.clearOppositeSideOfDragDirection = function (dir) {
        if (dir === Direction.LEFT) {
            this.leftCount = 0;
        }
        else if (dir === Direction.RIGHT) {
            this.rightCount = 0;
        }
    };
    return SwipeDragEndCounter;
}());
export { SwipeDragEndCounter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGUtZHJhZy1lbmQtY291bnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3ZpZXdlci1zZXJ2aWNlL3N3aXBlLWRyYWctZW5kLWNvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QztJQUlFO1FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVNLG1DQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksb0NBQU0sR0FBYixVQUFjLElBQVUsRUFBRSxHQUFjO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSw2Q0FBZSxHQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVPLDJDQUFhLEdBQXJCLFVBQXNCLElBQVU7UUFDOUIsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtZQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzlCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSyw4REFBZ0MsR0FBeEMsVUFBeUMsR0FBYztRQUNyRCxJQUFJLEdBQUcsS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO2FBQU0sSUFBSSxHQUFHLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi9tb2RlbHMvZGlyZWN0aW9uJztcbmltcG9ydCB7IFNpZGUgfSBmcm9tICcuLi9tb2RlbHMvc2lkZSc7XG5leHBvcnQgY2xhc3MgU3dpcGVEcmFnRW5kQ291bnRlciB7XG4gIHB1YmxpYyBsZWZ0Q291bnQ6IG51bWJlcjtcbiAgcHVibGljIHJpZ2h0Q291bnQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5sZWZ0Q291bnQgPSAwO1xuICAgIHRoaXMucmlnaHRDb3VudCA9IDA7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBvZiBzd2lwZSAvIHBhblxuICAgKiBAcGFyYW0gc2lkZSBoaXQgYnkgc3dpcGVcbiAgICovXG4gIHB1YmxpYyBhZGRIaXQoc2lkZTogU2lkZSwgZGlyOiBEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLmluY3JlbWVudFNpZGUoc2lkZSk7XG4gICAgdGhpcy5jbGVhck9wcG9zaXRlU2lkZU9mRHJhZ0RpcmVjdGlvbihkaXIpO1xuICB9XG5cbiAgcHVibGljIGhpdENvdW50UmVhY2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0Q291bnQgPj0gMiB8fCB0aGlzLnJpZ2h0Q291bnQgPj0gMjtcbiAgfVxuXG4gIHByaXZhdGUgaW5jcmVtZW50U2lkZShzaWRlOiBTaWRlKTogdm9pZCB7XG4gICAgaWYgKHNpZGUgPT09IFNpZGUuTEVGVCkge1xuICAgICAgdGhpcy5sZWZ0Q291bnQrKztcbiAgICAgIHRoaXMucmlnaHRDb3VudCA9IDA7XG4gICAgfSBlbHNlIGlmIChzaWRlID09PSBTaWRlLlJJR0hUKSB7XG4gICAgICB0aGlzLnJpZ2h0Q291bnQrKztcbiAgICAgIHRoaXMubGVmdENvdW50ID0gMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgb3Bwb3NpdGUgc2lkZSBpZiBzd2lwaW5nIGluIHRoZSBvdGhlciBkaXJlY3Rpb25cbiAgICogQHBhcmFtIERpcmVjdGlvbiBvZiBzd2lwZSAvIHBhblxuICAgKi9cbiAgcHJpdmF0ZSBjbGVhck9wcG9zaXRlU2lkZU9mRHJhZ0RpcmVjdGlvbihkaXI6IERpcmVjdGlvbik6IHZvaWQge1xuICAgIGlmIChkaXIgPT09IERpcmVjdGlvbi5MRUZUKSB7XG4gICAgICB0aGlzLmxlZnRDb3VudCA9IDA7XG4gICAgfSBlbHNlIGlmIChkaXIgPT09IERpcmVjdGlvbi5SSUdIVCkge1xuICAgICAgdGhpcy5yaWdodENvdW50ID0gMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==