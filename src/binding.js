<div>
    <textarea @bind="Description" @bind:event="oninput" />
</div>
<div>
    Count : @Description.Length
</div>