import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SourceReceiverFlow = {
  /**
   * The address of the receiver source. This is the value that should be communicated to the customer to send their funds to.
   */
  address?: string | null | undefined;
  /**
   * The total amount that was moved to your balance. This is almost always equal to the amount charged. In rare cases when customers deposit excess funds and we are unable to refund those, those funds get moved to your balance and show up in amount_charged as well. The amount charged is expressed in the source's currency.
   */
  amountCharged: number;
  /**
   * The total amount received by the receiver source. `amount_received = amount_returned + amount_charged` should be true for consumed sources unless customers deposit excess funds. The amount received is expressed in the source's currency.
   */
  amountReceived: number;
  /**
   * The total amount that was returned to the customer. The amount returned is expressed in the source's currency.
   */
  amountReturned: number;
  /**
   * Type of refund attribute method, one of `email`, `manual`, or `none`.
   */
  refundAttributesMethod: string;
  /**
   * Type of refund attribute status, one of `missing`, `requested`, or `available`.
   */
  refundAttributesStatus: string;
};

/**
 * @internal
 * SourceReceiverFlow without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceReceiverFlow = {
  address?: string | null | undefined;
  amount_charged: number;
  amount_received: number;
  amount_returned: number;
  refund_attributes_method: string;
  refund_attributes_status: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceReceiverFlow
 */
const SchemaIn$SourceReceiverFlow: z.ZodType<
  SourceReceiverFlow, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z.string().nullable().optional(),
    amount_charged: z.number().int(),
    amount_received: z.number().int(),
    amount_returned: z.number().int(),
    refund_attributes_method: z.string(),
    refund_attributes_status: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      amount_charged: "amountCharged",
      amount_received: "amountReceived",
      amount_returned: "amountReturned",
      refund_attributes_method: "refundAttributesMethod",
      refund_attributes_status: "refundAttributesStatus",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceReceiverFlow
 */
const SchemaOut$SourceReceiverFlow: z.ZodType<
  External$SourceReceiverFlow, // output type of this zod object
  z.ZodTypeDef,
  SourceReceiverFlow // the object to be transformed
> = z
  .object({
    address: z.string().nullable().optional(),
    amountCharged: z.number().int(),
    amountReceived: z.number().int(),
    amountReturned: z.number().int(),
    refundAttributesMethod: z.string(),
    refundAttributesStatus: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      amountCharged: "amount_charged",
      amountReceived: "amount_received",
      amountReturned: "amount_returned",
      refundAttributesMethod: "refund_attributes_method",
      refundAttributesStatus: "refund_attributes_status",
    });
  });

export const Schemas$SourceReceiverFlow = {
  in: SchemaIn$SourceReceiverFlow,
  out: SchemaOut$SourceReceiverFlow,
};
