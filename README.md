# stop-dismount
A simple Tera Proxy module to stop you from immediately dismounting because of SP's retries

Mostly only happens during high cooldown buffs, like Ultra Hyper-Turbo Fire (UHTF) times, where the retries will cause you to dismount straightaway. First mounting might be wonky and still dismounts straightaway, but subsequent ones should work. Increase timeout in Index.js if it does not work well.


