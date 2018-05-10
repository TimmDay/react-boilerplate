import React from 'react';

// this one is reusable.
// for use in AddExpense and EditExpense

// form fields, validation and logic

export default class ExpenseForm extends React.Component {


    // when form submitted, we will send it off to redux
    // to either edit existing expense or create new one
    //note optional, number can be zero if they want. just REQUIRE desc
    // define onCHange otherwise read only inputs

    // for amount input, enforce format
    // - only numbers, one decimal, two num after
    // - use string and convert to num last
    // conditional logic in oncChnage handler


    // local component state
    state = {
        description: '',
        note: '',
        amount: ''
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description: description }));
    };
    onNoteChange = (e) => {
        e.persist();
        this.setState(() => ({ note: e.target.value}));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount: amount }));
        }

    };


    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />

                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />

                    <textarea
                        placeholder="add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>

                    <button

                    >Add Expense</button>
                </form>
            </div>
        )
    }
}
