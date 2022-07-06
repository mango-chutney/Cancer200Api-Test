//
//  MapImagery.swift
//  Cancer200Map
//
//  Created by Jason Di Benedetto on 4/7/2022.
//

import Foundation
import Cancer200Api
import UIKit
import React
import MapKit

@objc(MapImagery)
class MapImagery: NSObject, RCTBridgeModule {
  @objc func initApi() {
    Cancer200.initApi()
  }
  
  @objc func openMap() {
    DispatchQueue.main.async {
      let navigationController = UINavigationController(rootViewController: MapViewController())
      navigationController.modalPresentationStyle = .overFullScreen
      
      let rootViewController = RCTPresentedViewController()
      
      rootViewController?.present(navigationController, animated: true, completion: nil)
    }
  }
  
  static func moduleName() -> String! {
    return "MapImagery"
  }
  
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
