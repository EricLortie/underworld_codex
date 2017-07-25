//
//  DetailViewController.h
//  UW App
//
//  Created by Eric Lortie on 2017-07-24.
//  Copyright © 2017 Eric Lortie. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface DetailViewController : UIViewController

@property (strong, nonatomic) NSDate *detailItem;
@property (weak, nonatomic) IBOutlet UILabel *detailDescriptionLabel;

@end

