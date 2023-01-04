# Data version

## 1. switch versions
![MtlffW](https://testksj.oss-cn-beijing.aliyuncs.com/uPic/MtlffW.png)

# Setting upa DVC pipeline

git clone
dvc init

```bash
dvc exp init --live 'dvclive' \ 
# set path to the directory where metrics and plots produced by DVCLive will be found
--data 'data/MNIST' \ 
# set path to data file
--code 'train.py' \
# set the path to the file or directory where the source code that your experiment depends on can be found (if any).
--model 'model.pt' \
# set the path to the file or directory where the model(s) produced by your experiment can be found (if any)
--type 'checkpoint' \
# selects the type of the stage to create. Currently it provides two alternatives: 
	`checkpoint` (supports logging [checkpoints](https://dvc.org/doc/command-reference/exp/run#checkpoints) during model training)
	`default` (no need to specify this).
python train.py
```
  

![enirtl](https://testksj.oss-cn-beijing.aliyuncs.com/uPic/enirtl.png)
```dvc
git add .
$ git commit -m "created DVC pipeline"
```


# Registering checkpoints in your code 
```python
from dvclive import Live

# lines added
dvclive = Live()
dvclile.log(k,v)
dvcline.next_step()
```
![nmcbzJ](https://testksj.oss-cn-beijing.aliyuncs.com/uPic/nmcbzJ.png)
### dvclive.next_step()
The [`Live.next_step()`](https://dvc.org/doc/dvclive/api-reference/live/next_step) line tells DVC that it can take a snapshot of the entire workspace and version it with Git. It's important that with this approach only code with metadata is versioned in Git (as an ephemeral commit), while the actual model weight file will be stored in the DVC data cache.

# Running experiments
```dvc
dvc exp run
```

## [Caching checkpoints](https://dvc.org/doc/user-guide/experiment-management/checkpoints#caching-checkpoints)
We can ==automatically push the checkpoints' code & data to your Git & DVC remotes while an experiment is running==. To enable this, two environment variables need to be set:

-   `DVC_EXP_AUTO_PUSH`: Enable auto push (`true`, `1`, `y`, `yes`)
-   `DVC_EXP_GIT_REMOTE`: Git repository (can be a URL or a name such as `origin`, `myremote`, etc.)

Note that a [`dvc remote default`](https://dvc.org/doc/command-reference/remote/default) is also needed so that the corresponding data can be pushed. With this configuration, [`dvc exp push`](https://dvc.org/doc/command-reference/exp/push) will be done automatically after every iteration.

⚠️ If either Git or DVC remotes are missing, the experiment will fail. However, if a checkpoint push doesn't succeed (due to rate limiting etc.) a warning will be printed, but the experiment will continue running as normal.

# Viewing checkpoints

You can see a table of your experiments and checkpoints in the terminal by running:

```dvc
$ dvc exp show
```

# Starting from an existing checkpoint 

```dvc
dvc exp apply 963b396
```
Next, we'll change the learning rate set in the _params.yaml_ to `0.000001` and start a new experiment based on an existing checkpoint with the following command:
```dvc
$ dvc exp run --set-param lr=0.00001
```

## Metrics diff
```dvc
dvc metrics diff d90179a 726d32f
```
## Looking at plots
```dvc
dvc plots diff d90179a 726d32f
```

# Resetting checkpoints
```dvc
dvc exp run --reset
```
# Committing checkpoints to Git
We can also remove all of the experiments we don't promote to our Git workspace with the following command:

```dvc
$ dvc exp gc --workspace --force
```


# Add pipeline stages with dvc run
![ICmTCJ](https://testksj.oss-cn-beijing.aliyuncs.com/uPic/ICmTCJ.png)

Specify name for DVC stage, dependencies, outputs and stage parameters
![G1GndX](https://testksj.oss-cn-beijing.aliyuncs.com/uPic/G1GndX.png)
![ULEaM9](https://testksj.oss-cn-beijing.aliyuncs.com/uPic/ULEaM9.png)

## dvc repro
[💪🏼 Practice - Reproduce end-to-end ML Pipelines](https://learn.iterative.ai/path-player?courseid=data-scientist-path&unit=61d37e4c600cf9501f632becUnit)
 run dvc repro (assume we do this for 1st time)
 run dvc repro (no changes, DVC skips all stages)
 run dvc repro -f (force running ML pipeline)
 run dvc repro train (run only train stage from dvc.yaml)
 update train stage configs and run dvc repro
 update src/stage/train.py code and run dvc repro
 remove reports/metrics.json and run dvc repro