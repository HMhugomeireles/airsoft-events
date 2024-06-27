import { Badge } from "@/components/ui/badge";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Controller, useFieldArray } from "react-hook-form"

interface TeamItemsProps {
    control: any;
    form: any;
    indexItem: number;
  }

export function TeamItems({
    control,
    form,
    indexItem
}: TeamItemsProps) {
    const [teamItem, setTeamItem] = useState('');
    const { fields, append, remove } = useFieldArray({
        control,
        name: `teams[${indexItem}].teamItems`
    })

    function handleAddItem(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (teamItem.trim()) {
                append(teamItem)
                setTeamItem('');
            }
        }
    }


    return (
        <div>
            <div  className="flex flex-wrap">
                {fields.map((field, index) => (
                    <Controller
                        key={`teamItems-badge-${indexItem}-${index}`}
                        name={`teams.${indexItem}.teamItems.${index}`}
                        control={control}
                        defaultValue={field}
                        render={({ field }) => <Badge className="m-2 rounded-3xl">{field.value}</Badge>}
                    />
                ))}
            </div>
            <FormItem>
                <FormLabel>Team items</FormLabel>
                <FormControl>
                    <Input
                        type="text"
                        value={teamItem}
                        onChange={(e) => setTeamItem(e.target.value)} 
                        placeholder="Insert new team item" 
                        onKeyDown={handleAddItem} 
                    />
                </FormControl>
                <FormDescription>Write the item and press Enter</FormDescription>
                <FormMessage />
            </FormItem>
        </div>
    )
}