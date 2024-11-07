# Auto-set Watched Categories for NodeBB

NodeBB presently doesn't have any code to have users auto-watching any Categories (individual forums). This seemed a little weird to me considering one can't have new users getting email notifications in categories unless they're watching categories. So, an administrator can set the various default notification rules for users, but even if you set them to be really "noisy" (email notifications on top of forum notifications), important announcements that get posted will never notify any user unless they're logged in and looking at the forum. 

So, this plugin was created so one can set users to be watching whatever communities you like when their account is created. Users can always stop watching forums or change their notification preferences.

I have to thank @baris for this code. It's his, I didn't come up with it.

To make much use of this, you have to edit library.js and add statements to make it watch the various categories for your users that make sense on your forum. (Duplicate and utilize the "await user.setCategoryWatchState ..." line as appropriate - you could add in more category consts if you like as well)
