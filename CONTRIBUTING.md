# Contributing to This Project
To contribute to an open source project, you will follow the git workflow. You will fork the main repository, clone it to your machine, make changes (in a branch), and follow steps to submit a pull request - so your changes can be merged with the main repo.

## Get started
1. Go to [the main repository](https://github.com/ScrimbaBootcamp/productivity-app).
2. Fork the project.
<!-- insert screenshot here -->
3. Under 'Owner', you should see your own GitHub account, followed by 'productivity-app'.
4. Look at the other options. If you would like you can add a description, you can. You shouldn't need to change the branch that is being copied.
5. Click 'Create Fork'

You should be redirected to your fork of the repository. In the top left corner of the page you'll see '[Your-Username]/productivity-app' to the right of the Octocat logo. 

6. Look for the '<> Code' button above the list of files, and click on it. 
7. Copy the URL for (your) repository.

## Continue in the terminal
1. Open a terminal. 
2. Change the current working directory to the location where you want the cloned directory.\ 
For example: `cd Users/Some-Directory/productivity-app`
3. Type `git clone` and paste the URL that you just copied. Hit enter. Your local clone will be created.

### Configure git to sync changes with main repo
When you fork a project, you can configure git to pull down changes from the upstream repository into the local clone of your fork in addition to submitting requests to merge changes you've made.

1. In GitHub, go back to the project's [main repository](https://github.com/ScrimbaBootcamp/productivity-app).
2. Click on the '<> Code' button in that repo, and copy the URL.
3. Back in the terminal, type `git remote add upstream`, paste the URL and hit Enter.
4. To verify your remote repositories, type `git remote -v` and hit Enter. You should see something like this:
    ```
        $ git remote -v

        > origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (fetch)
        > origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (push)
        > upstream  https://github.com/ScrimbaBootcamp/productivity-app.git (fetch)
        > upstream  https://github.com/ScrimbaBootcamp/productivity-app.git (push)
    ```

You will now be able to keep your fork synced with the upstream repository using git.

<!-- Add steps for [syncing a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) -->

## Continue in GitHub Desktop

<!-- Add steps for cloning a project and adding an upstream repository -->

## Continue using the VS Code GUI

<!-- Add steps for cloning a project and adding an upstream repository -->

## Create a feature branch

When you are working on a particular feature (or fixing a bug, or refactoring something), it can be a good practice to create a named branch. This allows you to isolate your changes from the main codebase and hopefully prevent conflicts and errors.
 If you are using the terminal, you can use these two commands:\
```
git branch [name-of-your-feature-branch]
git checkout [name-of-your-feature-branch]
```
First you are creating the branch, and then you are switching to that branch to make your changes. 
You can accomplish the same thing in one line though, like this:\
`git checkout -b [name-of-your-feature-branch]`

You will then create changes to stage, commit, push, and have merged. Once your branch has been merged with the main repository, you can delete your feature branch from the terminal, with one line:\
`git branch _-d_ [name-of-your-feature-branch]`


## Stage, commit, and push changes that you make

<!-- using git in the terminal -->

## Submit a pull request
<!-- GitHub -->

## Resolving Merge Conflicts