var queries = {};
queries.myTasksFlat = `
SELECT 
	[System.Id], [Microsoft.VSTS.Scheduling.RemainingWork], [System.Title], 
	[System.State], [System.AreaPath], [System.IterationPath], 
	[Microsoft.VSTS.Common.Priority] 
		
FROM WorkItems 

WHERE 
	[System.TeamProject] = @project  
	AND  [System.AssignedTo] = @me  
	AND  [System.WorkItemType] = 'Task'  
	AND  [System.State] <> 'Done'  
	AND  [System.State] <> 'Removed' 

ORDER BY [System.State], [System.ChangedDate] desc 
`;


queries.myOpenTasks = `
SELECT 
	[System.Id], [System.NodeName], [System.Title], 
	[Microsoft.VSTS.Scheduling.RemainingWork], [System.State], 
	[System.IterationPath], [Microsoft.VSTS.Common.Priority] 

FROM WorkItemLinks 

WHERE 
	(
		Source.[System.TeamProject] = @project 
		AND Source.[System.State] <> 'Done' 
		AND Source.[System.State] <> 'Removed'
	) 
	AND 
	(
		[System.Links.LinkType] = 'System.LinkTypes.Hierarchy-Forward'
	) 
	AND 
	(
		Target.[System.TeamProject] = @project 
		AND Target.[System.WorkItemType] = 'Task' 
		AND Target.[System.AssignedTo] = @me 
		AND Target.[System.State] <> 'Done' 
		AND Target.[System.State] <> 'Removed'
	)

ORDER BY [Microsoft.VSTS.Common.Priority], [System.State] mode(Recursive,ReturnMatchingChildren)
`;

queries.myRecentDone = `
SELECT 
	[System.Id], [System.NodeName], [System.Title], 
	[Microsoft.VSTS.Scheduling.RemainingWork], [System.State], 
	[System.IterationPath], [Microsoft.VSTS.Common.Priority] 

FROM WorkItemLinks 

WHERE 
	(
		Source.[System.TeamProject] = @project 
		AND Source.[System.State] <> 'Done' 
		AND Source.[System.State] <> 'Removed'
	) 
	AND 
	(
		[System.Links.LinkType] = 'System.LinkTypes.Hierarchy-Forward'
	) 
	AND 
	(
		Target.[System.TeamProject] = @project 
		AND Target.[System.WorkItemType] = 'Task' 
		AND Target.[System.AssignedTo] = @me 
		AND Target.[System.State] = 'Done' 
		AND Target.[Microsoft.VSTS.Common.ClosedDate] > @today - 10
	) 

ORDER BY [Microsoft.VSTS.Common.ClosedDate] desc mode(Recursive,ReturnMatchingChildren)
`;


module.exports = queries;