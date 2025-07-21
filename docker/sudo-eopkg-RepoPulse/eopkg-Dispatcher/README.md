## apt-Dispatcher

- This module holds the master rsync schedule and dispatches the rsync jobs to the worker nodes.
- It is designed to be run on a central server that manages the rsync jobs for all worker nodes.
- These worker nodes get sent out with an rsync wrapper that collects details about the rsync job and sends them back to the central server.

