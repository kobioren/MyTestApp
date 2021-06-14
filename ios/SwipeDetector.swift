import UIKit

class SwipeDetector: NSObject {
  var swipeUp: UISwipeGestureRecognizer? = nil
  var swipeDown: UISwipeGestureRecognizer? = nil
  var swipeLeft: UISwipeGestureRecognizer? = nil
  var swipeRight: UISwipeGestureRecognizer? = nil
  @objc override init() {
      print("init swipe")
  }

  @objc private func swipeDetected() {
        print("swipe")
  }
  
  @objc func ok() {
    self.swipeUp = UISwipeGestureRecognizer(target: self, action: #selector(self.swipeDetected))
    self.swipeDown = UISwipeGestureRecognizer(target: self, action: #selector(self.swipeDetected))
    self.swipeLeft = UISwipeGestureRecognizer(target: self, action: #selector(self.swipeDetected))
    self.swipeRight = UISwipeGestureRecognizer(target: self, action: #selector(self.swipeDetected))

    self.swipeUp?.direction = UISwipeGestureRecognizer.Direction.up
    self.swipeDown?.direction = UISwipeGestureRecognizer.Direction.down
    self.swipeLeft?.direction = UISwipeGestureRecognizer.Direction.left
    self.swipeRight?.direction = UISwipeGestureRecognizer.Direction.right
    let view = UIApplication.shared.windows.first { $0.isKeyWindow }
    view?.addGestureRecognizer(self.swipeRight!)
    view?.addGestureRecognizer(self.swipeDown!)
    view?.addGestureRecognizer(self.swipeLeft!)
    view?.addGestureRecognizer(self.swipeUp!)
  }
}
