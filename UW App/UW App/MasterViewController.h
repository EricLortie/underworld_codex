//
//  MasterViewController.h
//  UW App
//
//  Created by Eric Lortie on 2017-07-24.
//  Copyright © 2017 Eric Lortie. All rights reserved.
//

#import <UIKit/UIKit.h>

@class DetailViewController;

@interface MasterViewController : UITableViewController

@property (strong, nonatomic) DetailViewController *detailViewController;


@end

