---
title: RecoveRxによる論理障害が起きたMicroSDデータの復旧
date: 2021-12-08T15:22:45.880Z
slug: RecoveRx
draft: false
path: /blog/RecoveRx
---
独立したローカルデータを保存していたMicroSDが論理障害で読み取れなくなって弱っていたが、[RecoveRx](https://jp.transcend-info.com/Support/Software-4)を用いて復元することができた。備忘録として残す。

何を誤ったかわからないが、SDを認識するもののデータが見られない状態になった。手元のMac, Android, 適当なカメラでも認識せず、もうだめぽ……となっていたところ、ストレージで有名なTranschend社が復旧ソフトウェアをリリースしているのを知り、試した。そしたらうまくサルベージできた。

この手のソフトは適当にググると、それっぽいものが出てくる。一方で、セキュリティ的に怪しいものが多い。その点このソフトは大きい企業であるTranscend社がリリースしており、かつカメラデータの復元の文脈で試用している人がそこそこいたため、ある程度信頼できた（パケット解析してどうこう確かめたわけではない）。Macで使えるのもでかい。無料だったので、せめてものお布施として予備のストレージを買った。

クラウドサービスへの依存度の高まりに伴った検閲の問題や、そこまで行かなくても単純に会社のセキュリティの観点で、ローカルへのバックアップはいつまでも需要があると思う。そうした中で確率で起こってしまう事象へは、きちんと備えをしておこうと思った。