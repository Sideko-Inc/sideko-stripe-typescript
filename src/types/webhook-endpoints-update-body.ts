import {
  External$WebhookEndpointsUpdateBodyMetadataObj0,
  Schemas$WebhookEndpointsUpdateBodyMetadataObj0,
  WebhookEndpointsUpdateBodyMetadataObj0,
} from "./webhook-endpoints-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * WebhookEndpointsUpdateBody
 */
export type WebhookEndpointsUpdateBody = {
  /**
   * An optional description of what the webhook is used for.
   */
  description?: (string | string) | undefined;
  /**
   * Disable the webhook endpoint if set to true.
   */
  disabled?: boolean | undefined;
  /**
   * The list of events to enable for this endpoint. You may specify `['*']` to enable all events, except those that require explicit selection.
   */
  enabledEvents?:
    | (
        | "*"
        | "account.application.authorized"
        | "account.application.deauthorized"
        | "account.external_account.created"
        | "account.external_account.deleted"
        | "account.external_account.updated"
        | "account.updated"
        | "application_fee.created"
        | "application_fee.refund.updated"
        | "application_fee.refunded"
        | "balance.available"
        | "billing.alert.triggered"
        | "billing_portal.configuration.created"
        | "billing_portal.configuration.updated"
        | "billing_portal.session.created"
        | "capability.updated"
        | "cash_balance.funds_available"
        | "charge.captured"
        | "charge.dispute.closed"
        | "charge.dispute.created"
        | "charge.dispute.funds_reinstated"
        | "charge.dispute.funds_withdrawn"
        | "charge.dispute.updated"
        | "charge.expired"
        | "charge.failed"
        | "charge.pending"
        | "charge.refund.updated"
        | "charge.refunded"
        | "charge.succeeded"
        | "charge.updated"
        | "checkout.session.async_payment_failed"
        | "checkout.session.async_payment_succeeded"
        | "checkout.session.completed"
        | "checkout.session.expired"
        | "climate.order.canceled"
        | "climate.order.created"
        | "climate.order.delayed"
        | "climate.order.delivered"
        | "climate.order.product_substituted"
        | "climate.product.created"
        | "climate.product.pricing_updated"
        | "coupon.created"
        | "coupon.deleted"
        | "coupon.updated"
        | "credit_note.created"
        | "credit_note.updated"
        | "credit_note.voided"
        | "customer.created"
        | "customer.deleted"
        | "customer.discount.created"
        | "customer.discount.deleted"
        | "customer.discount.updated"
        | "customer.source.created"
        | "customer.source.deleted"
        | "customer.source.expiring"
        | "customer.source.updated"
        | "customer.subscription.created"
        | "customer.subscription.deleted"
        | "customer.subscription.paused"
        | "customer.subscription.pending_update_applied"
        | "customer.subscription.pending_update_expired"
        | "customer.subscription.resumed"
        | "customer.subscription.trial_will_end"
        | "customer.subscription.updated"
        | "customer.tax_id.created"
        | "customer.tax_id.deleted"
        | "customer.tax_id.updated"
        | "customer.updated"
        | "customer_cash_balance_transaction.created"
        | "entitlements.active_entitlement_summary.updated"
        | "file.created"
        | "financial_connections.account.created"
        | "financial_connections.account.deactivated"
        | "financial_connections.account.disconnected"
        | "financial_connections.account.reactivated"
        | "financial_connections.account.refreshed_balance"
        | "financial_connections.account.refreshed_ownership"
        | "financial_connections.account.refreshed_transactions"
        | "identity.verification_session.canceled"
        | "identity.verification_session.created"
        | "identity.verification_session.processing"
        | "identity.verification_session.redacted"
        | "identity.verification_session.requires_input"
        | "identity.verification_session.verified"
        | "invoice.created"
        | "invoice.deleted"
        | "invoice.finalization_failed"
        | "invoice.finalized"
        | "invoice.marked_uncollectible"
        | "invoice.overdue"
        | "invoice.overpaid"
        | "invoice.paid"
        | "invoice.payment_action_required"
        | "invoice.payment_failed"
        | "invoice.payment_succeeded"
        | "invoice.sent"
        | "invoice.upcoming"
        | "invoice.updated"
        | "invoice.voided"
        | "invoice.will_be_due"
        | "invoiceitem.created"
        | "invoiceitem.deleted"
        | "issuing_authorization.created"
        | "issuing_authorization.request"
        | "issuing_authorization.updated"
        | "issuing_card.created"
        | "issuing_card.updated"
        | "issuing_cardholder.created"
        | "issuing_cardholder.updated"
        | "issuing_dispute.closed"
        | "issuing_dispute.created"
        | "issuing_dispute.funds_reinstated"
        | "issuing_dispute.funds_rescinded"
        | "issuing_dispute.submitted"
        | "issuing_dispute.updated"
        | "issuing_personalization_design.activated"
        | "issuing_personalization_design.deactivated"
        | "issuing_personalization_design.rejected"
        | "issuing_personalization_design.updated"
        | "issuing_token.created"
        | "issuing_token.updated"
        | "issuing_transaction.created"
        | "issuing_transaction.purchase_details_receipt_updated"
        | "issuing_transaction.updated"
        | "mandate.updated"
        | "payment_intent.amount_capturable_updated"
        | "payment_intent.canceled"
        | "payment_intent.created"
        | "payment_intent.partially_funded"
        | "payment_intent.payment_failed"
        | "payment_intent.processing"
        | "payment_intent.requires_action"
        | "payment_intent.succeeded"
        | "payment_link.created"
        | "payment_link.updated"
        | "payment_method.attached"
        | "payment_method.automatically_updated"
        | "payment_method.detached"
        | "payment_method.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.paid"
        | "payout.reconciliation_completed"
        | "payout.updated"
        | "person.created"
        | "person.deleted"
        | "person.updated"
        | "plan.created"
        | "plan.deleted"
        | "plan.updated"
        | "price.created"
        | "price.deleted"
        | "price.updated"
        | "product.created"
        | "product.deleted"
        | "product.updated"
        | "promotion_code.created"
        | "promotion_code.updated"
        | "quote.accepted"
        | "quote.canceled"
        | "quote.created"
        | "quote.finalized"
        | "radar.early_fraud_warning.created"
        | "radar.early_fraud_warning.updated"
        | "refund.created"
        | "refund.failed"
        | "refund.updated"
        | "reporting.report_run.failed"
        | "reporting.report_run.succeeded"
        | "reporting.report_type.updated"
        | "review.closed"
        | "review.opened"
        | "setup_intent.canceled"
        | "setup_intent.created"
        | "setup_intent.requires_action"
        | "setup_intent.setup_failed"
        | "setup_intent.succeeded"
        | "sigma.scheduled_query_run.created"
        | "source.canceled"
        | "source.chargeable"
        | "source.failed"
        | "source.mandate_notification"
        | "source.refund_attributes_required"
        | "source.transaction.created"
        | "source.transaction.updated"
        | "subscription_schedule.aborted"
        | "subscription_schedule.canceled"
        | "subscription_schedule.completed"
        | "subscription_schedule.created"
        | "subscription_schedule.expiring"
        | "subscription_schedule.released"
        | "subscription_schedule.updated"
        | "tax.settings.updated"
        | "tax_rate.created"
        | "tax_rate.updated"
        | "terminal.reader.action_failed"
        | "terminal.reader.action_succeeded"
        | "test_helpers.test_clock.advancing"
        | "test_helpers.test_clock.created"
        | "test_helpers.test_clock.deleted"
        | "test_helpers.test_clock.internal_failure"
        | "test_helpers.test_clock.ready"
        | "topup.canceled"
        | "topup.created"
        | "topup.failed"
        | "topup.reversed"
        | "topup.succeeded"
        | "transfer.created"
        | "transfer.reversed"
        | "transfer.updated"
        | "treasury.credit_reversal.created"
        | "treasury.credit_reversal.posted"
        | "treasury.debit_reversal.completed"
        | "treasury.debit_reversal.created"
        | "treasury.debit_reversal.initial_credit_granted"
        | "treasury.financial_account.closed"
        | "treasury.financial_account.created"
        | "treasury.financial_account.features_status_updated"
        | "treasury.inbound_transfer.canceled"
        | "treasury.inbound_transfer.created"
        | "treasury.inbound_transfer.failed"
        | "treasury.inbound_transfer.succeeded"
        | "treasury.outbound_payment.canceled"
        | "treasury.outbound_payment.created"
        | "treasury.outbound_payment.expected_arrival_date_updated"
        | "treasury.outbound_payment.failed"
        | "treasury.outbound_payment.posted"
        | "treasury.outbound_payment.returned"
        | "treasury.outbound_payment.tracking_details_updated"
        | "treasury.outbound_transfer.canceled"
        | "treasury.outbound_transfer.created"
        | "treasury.outbound_transfer.expected_arrival_date_updated"
        | "treasury.outbound_transfer.failed"
        | "treasury.outbound_transfer.posted"
        | "treasury.outbound_transfer.returned"
        | "treasury.outbound_transfer.tracking_details_updated"
        | "treasury.received_credit.created"
        | "treasury.received_credit.failed"
        | "treasury.received_credit.succeeded"
        | "treasury.received_debit.created"
      )[]
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (WebhookEndpointsUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * The URL of the webhook endpoint.
   */
  url?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ((string | string) | undefined)
    | (boolean | undefined)
    | (
        | (
            | "*"
            | "account.application.authorized"
            | "account.application.deauthorized"
            | "account.external_account.created"
            | "account.external_account.deleted"
            | "account.external_account.updated"
            | "account.updated"
            | "application_fee.created"
            | "application_fee.refund.updated"
            | "application_fee.refunded"
            | "balance.available"
            | "billing.alert.triggered"
            | "billing_portal.configuration.created"
            | "billing_portal.configuration.updated"
            | "billing_portal.session.created"
            | "capability.updated"
            | "cash_balance.funds_available"
            | "charge.captured"
            | "charge.dispute.closed"
            | "charge.dispute.created"
            | "charge.dispute.funds_reinstated"
            | "charge.dispute.funds_withdrawn"
            | "charge.dispute.updated"
            | "charge.expired"
            | "charge.failed"
            | "charge.pending"
            | "charge.refund.updated"
            | "charge.refunded"
            | "charge.succeeded"
            | "charge.updated"
            | "checkout.session.async_payment_failed"
            | "checkout.session.async_payment_succeeded"
            | "checkout.session.completed"
            | "checkout.session.expired"
            | "climate.order.canceled"
            | "climate.order.created"
            | "climate.order.delayed"
            | "climate.order.delivered"
            | "climate.order.product_substituted"
            | "climate.product.created"
            | "climate.product.pricing_updated"
            | "coupon.created"
            | "coupon.deleted"
            | "coupon.updated"
            | "credit_note.created"
            | "credit_note.updated"
            | "credit_note.voided"
            | "customer.created"
            | "customer.deleted"
            | "customer.discount.created"
            | "customer.discount.deleted"
            | "customer.discount.updated"
            | "customer.source.created"
            | "customer.source.deleted"
            | "customer.source.expiring"
            | "customer.source.updated"
            | "customer.subscription.created"
            | "customer.subscription.deleted"
            | "customer.subscription.paused"
            | "customer.subscription.pending_update_applied"
            | "customer.subscription.pending_update_expired"
            | "customer.subscription.resumed"
            | "customer.subscription.trial_will_end"
            | "customer.subscription.updated"
            | "customer.tax_id.created"
            | "customer.tax_id.deleted"
            | "customer.tax_id.updated"
            | "customer.updated"
            | "customer_cash_balance_transaction.created"
            | "entitlements.active_entitlement_summary.updated"
            | "file.created"
            | "financial_connections.account.created"
            | "financial_connections.account.deactivated"
            | "financial_connections.account.disconnected"
            | "financial_connections.account.reactivated"
            | "financial_connections.account.refreshed_balance"
            | "financial_connections.account.refreshed_ownership"
            | "financial_connections.account.refreshed_transactions"
            | "identity.verification_session.canceled"
            | "identity.verification_session.created"
            | "identity.verification_session.processing"
            | "identity.verification_session.redacted"
            | "identity.verification_session.requires_input"
            | "identity.verification_session.verified"
            | "invoice.created"
            | "invoice.deleted"
            | "invoice.finalization_failed"
            | "invoice.finalized"
            | "invoice.marked_uncollectible"
            | "invoice.overdue"
            | "invoice.overpaid"
            | "invoice.paid"
            | "invoice.payment_action_required"
            | "invoice.payment_failed"
            | "invoice.payment_succeeded"
            | "invoice.sent"
            | "invoice.upcoming"
            | "invoice.updated"
            | "invoice.voided"
            | "invoice.will_be_due"
            | "invoiceitem.created"
            | "invoiceitem.deleted"
            | "issuing_authorization.created"
            | "issuing_authorization.request"
            | "issuing_authorization.updated"
            | "issuing_card.created"
            | "issuing_card.updated"
            | "issuing_cardholder.created"
            | "issuing_cardholder.updated"
            | "issuing_dispute.closed"
            | "issuing_dispute.created"
            | "issuing_dispute.funds_reinstated"
            | "issuing_dispute.funds_rescinded"
            | "issuing_dispute.submitted"
            | "issuing_dispute.updated"
            | "issuing_personalization_design.activated"
            | "issuing_personalization_design.deactivated"
            | "issuing_personalization_design.rejected"
            | "issuing_personalization_design.updated"
            | "issuing_token.created"
            | "issuing_token.updated"
            | "issuing_transaction.created"
            | "issuing_transaction.purchase_details_receipt_updated"
            | "issuing_transaction.updated"
            | "mandate.updated"
            | "payment_intent.amount_capturable_updated"
            | "payment_intent.canceled"
            | "payment_intent.created"
            | "payment_intent.partially_funded"
            | "payment_intent.payment_failed"
            | "payment_intent.processing"
            | "payment_intent.requires_action"
            | "payment_intent.succeeded"
            | "payment_link.created"
            | "payment_link.updated"
            | "payment_method.attached"
            | "payment_method.automatically_updated"
            | "payment_method.detached"
            | "payment_method.updated"
            | "payout.canceled"
            | "payout.created"
            | "payout.failed"
            | "payout.paid"
            | "payout.reconciliation_completed"
            | "payout.updated"
            | "person.created"
            | "person.deleted"
            | "person.updated"
            | "plan.created"
            | "plan.deleted"
            | "plan.updated"
            | "price.created"
            | "price.deleted"
            | "price.updated"
            | "product.created"
            | "product.deleted"
            | "product.updated"
            | "promotion_code.created"
            | "promotion_code.updated"
            | "quote.accepted"
            | "quote.canceled"
            | "quote.created"
            | "quote.finalized"
            | "radar.early_fraud_warning.created"
            | "radar.early_fraud_warning.updated"
            | "refund.created"
            | "refund.failed"
            | "refund.updated"
            | "reporting.report_run.failed"
            | "reporting.report_run.succeeded"
            | "reporting.report_type.updated"
            | "review.closed"
            | "review.opened"
            | "setup_intent.canceled"
            | "setup_intent.created"
            | "setup_intent.requires_action"
            | "setup_intent.setup_failed"
            | "setup_intent.succeeded"
            | "sigma.scheduled_query_run.created"
            | "source.canceled"
            | "source.chargeable"
            | "source.failed"
            | "source.mandate_notification"
            | "source.refund_attributes_required"
            | "source.transaction.created"
            | "source.transaction.updated"
            | "subscription_schedule.aborted"
            | "subscription_schedule.canceled"
            | "subscription_schedule.completed"
            | "subscription_schedule.created"
            | "subscription_schedule.expiring"
            | "subscription_schedule.released"
            | "subscription_schedule.updated"
            | "tax.settings.updated"
            | "tax_rate.created"
            | "tax_rate.updated"
            | "terminal.reader.action_failed"
            | "terminal.reader.action_succeeded"
            | "test_helpers.test_clock.advancing"
            | "test_helpers.test_clock.created"
            | "test_helpers.test_clock.deleted"
            | "test_helpers.test_clock.internal_failure"
            | "test_helpers.test_clock.ready"
            | "topup.canceled"
            | "topup.created"
            | "topup.failed"
            | "topup.reversed"
            | "topup.succeeded"
            | "transfer.created"
            | "transfer.reversed"
            | "transfer.updated"
            | "treasury.credit_reversal.created"
            | "treasury.credit_reversal.posted"
            | "treasury.debit_reversal.completed"
            | "treasury.debit_reversal.created"
            | "treasury.debit_reversal.initial_credit_granted"
            | "treasury.financial_account.closed"
            | "treasury.financial_account.created"
            | "treasury.financial_account.features_status_updated"
            | "treasury.inbound_transfer.canceled"
            | "treasury.inbound_transfer.created"
            | "treasury.inbound_transfer.failed"
            | "treasury.inbound_transfer.succeeded"
            | "treasury.outbound_payment.canceled"
            | "treasury.outbound_payment.created"
            | "treasury.outbound_payment.expected_arrival_date_updated"
            | "treasury.outbound_payment.failed"
            | "treasury.outbound_payment.posted"
            | "treasury.outbound_payment.returned"
            | "treasury.outbound_payment.tracking_details_updated"
            | "treasury.outbound_transfer.canceled"
            | "treasury.outbound_transfer.created"
            | "treasury.outbound_transfer.expected_arrival_date_updated"
            | "treasury.outbound_transfer.failed"
            | "treasury.outbound_transfer.posted"
            | "treasury.outbound_transfer.returned"
            | "treasury.outbound_transfer.tracking_details_updated"
            | "treasury.received_credit.created"
            | "treasury.received_credit.failed"
            | "treasury.received_credit.succeeded"
            | "treasury.received_debit.created"
          )[]
        | undefined
      )
    | (string[] | undefined)
    | ((WebhookEndpointsUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * WebhookEndpointsUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$WebhookEndpointsUpdateBody = {
  description?: (string | string) | undefined;
  disabled?: boolean | undefined;
  enabled_events?:
    | (
        | "*"
        | "account.application.authorized"
        | "account.application.deauthorized"
        | "account.external_account.created"
        | "account.external_account.deleted"
        | "account.external_account.updated"
        | "account.updated"
        | "application_fee.created"
        | "application_fee.refund.updated"
        | "application_fee.refunded"
        | "balance.available"
        | "billing.alert.triggered"
        | "billing_portal.configuration.created"
        | "billing_portal.configuration.updated"
        | "billing_portal.session.created"
        | "capability.updated"
        | "cash_balance.funds_available"
        | "charge.captured"
        | "charge.dispute.closed"
        | "charge.dispute.created"
        | "charge.dispute.funds_reinstated"
        | "charge.dispute.funds_withdrawn"
        | "charge.dispute.updated"
        | "charge.expired"
        | "charge.failed"
        | "charge.pending"
        | "charge.refund.updated"
        | "charge.refunded"
        | "charge.succeeded"
        | "charge.updated"
        | "checkout.session.async_payment_failed"
        | "checkout.session.async_payment_succeeded"
        | "checkout.session.completed"
        | "checkout.session.expired"
        | "climate.order.canceled"
        | "climate.order.created"
        | "climate.order.delayed"
        | "climate.order.delivered"
        | "climate.order.product_substituted"
        | "climate.product.created"
        | "climate.product.pricing_updated"
        | "coupon.created"
        | "coupon.deleted"
        | "coupon.updated"
        | "credit_note.created"
        | "credit_note.updated"
        | "credit_note.voided"
        | "customer.created"
        | "customer.deleted"
        | "customer.discount.created"
        | "customer.discount.deleted"
        | "customer.discount.updated"
        | "customer.source.created"
        | "customer.source.deleted"
        | "customer.source.expiring"
        | "customer.source.updated"
        | "customer.subscription.created"
        | "customer.subscription.deleted"
        | "customer.subscription.paused"
        | "customer.subscription.pending_update_applied"
        | "customer.subscription.pending_update_expired"
        | "customer.subscription.resumed"
        | "customer.subscription.trial_will_end"
        | "customer.subscription.updated"
        | "customer.tax_id.created"
        | "customer.tax_id.deleted"
        | "customer.tax_id.updated"
        | "customer.updated"
        | "customer_cash_balance_transaction.created"
        | "entitlements.active_entitlement_summary.updated"
        | "file.created"
        | "financial_connections.account.created"
        | "financial_connections.account.deactivated"
        | "financial_connections.account.disconnected"
        | "financial_connections.account.reactivated"
        | "financial_connections.account.refreshed_balance"
        | "financial_connections.account.refreshed_ownership"
        | "financial_connections.account.refreshed_transactions"
        | "identity.verification_session.canceled"
        | "identity.verification_session.created"
        | "identity.verification_session.processing"
        | "identity.verification_session.redacted"
        | "identity.verification_session.requires_input"
        | "identity.verification_session.verified"
        | "invoice.created"
        | "invoice.deleted"
        | "invoice.finalization_failed"
        | "invoice.finalized"
        | "invoice.marked_uncollectible"
        | "invoice.overdue"
        | "invoice.overpaid"
        | "invoice.paid"
        | "invoice.payment_action_required"
        | "invoice.payment_failed"
        | "invoice.payment_succeeded"
        | "invoice.sent"
        | "invoice.upcoming"
        | "invoice.updated"
        | "invoice.voided"
        | "invoice.will_be_due"
        | "invoiceitem.created"
        | "invoiceitem.deleted"
        | "issuing_authorization.created"
        | "issuing_authorization.request"
        | "issuing_authorization.updated"
        | "issuing_card.created"
        | "issuing_card.updated"
        | "issuing_cardholder.created"
        | "issuing_cardholder.updated"
        | "issuing_dispute.closed"
        | "issuing_dispute.created"
        | "issuing_dispute.funds_reinstated"
        | "issuing_dispute.funds_rescinded"
        | "issuing_dispute.submitted"
        | "issuing_dispute.updated"
        | "issuing_personalization_design.activated"
        | "issuing_personalization_design.deactivated"
        | "issuing_personalization_design.rejected"
        | "issuing_personalization_design.updated"
        | "issuing_token.created"
        | "issuing_token.updated"
        | "issuing_transaction.created"
        | "issuing_transaction.purchase_details_receipt_updated"
        | "issuing_transaction.updated"
        | "mandate.updated"
        | "payment_intent.amount_capturable_updated"
        | "payment_intent.canceled"
        | "payment_intent.created"
        | "payment_intent.partially_funded"
        | "payment_intent.payment_failed"
        | "payment_intent.processing"
        | "payment_intent.requires_action"
        | "payment_intent.succeeded"
        | "payment_link.created"
        | "payment_link.updated"
        | "payment_method.attached"
        | "payment_method.automatically_updated"
        | "payment_method.detached"
        | "payment_method.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.paid"
        | "payout.reconciliation_completed"
        | "payout.updated"
        | "person.created"
        | "person.deleted"
        | "person.updated"
        | "plan.created"
        | "plan.deleted"
        | "plan.updated"
        | "price.created"
        | "price.deleted"
        | "price.updated"
        | "product.created"
        | "product.deleted"
        | "product.updated"
        | "promotion_code.created"
        | "promotion_code.updated"
        | "quote.accepted"
        | "quote.canceled"
        | "quote.created"
        | "quote.finalized"
        | "radar.early_fraud_warning.created"
        | "radar.early_fraud_warning.updated"
        | "refund.created"
        | "refund.failed"
        | "refund.updated"
        | "reporting.report_run.failed"
        | "reporting.report_run.succeeded"
        | "reporting.report_type.updated"
        | "review.closed"
        | "review.opened"
        | "setup_intent.canceled"
        | "setup_intent.created"
        | "setup_intent.requires_action"
        | "setup_intent.setup_failed"
        | "setup_intent.succeeded"
        | "sigma.scheduled_query_run.created"
        | "source.canceled"
        | "source.chargeable"
        | "source.failed"
        | "source.mandate_notification"
        | "source.refund_attributes_required"
        | "source.transaction.created"
        | "source.transaction.updated"
        | "subscription_schedule.aborted"
        | "subscription_schedule.canceled"
        | "subscription_schedule.completed"
        | "subscription_schedule.created"
        | "subscription_schedule.expiring"
        | "subscription_schedule.released"
        | "subscription_schedule.updated"
        | "tax.settings.updated"
        | "tax_rate.created"
        | "tax_rate.updated"
        | "terminal.reader.action_failed"
        | "terminal.reader.action_succeeded"
        | "test_helpers.test_clock.advancing"
        | "test_helpers.test_clock.created"
        | "test_helpers.test_clock.deleted"
        | "test_helpers.test_clock.internal_failure"
        | "test_helpers.test_clock.ready"
        | "topup.canceled"
        | "topup.created"
        | "topup.failed"
        | "topup.reversed"
        | "topup.succeeded"
        | "transfer.created"
        | "transfer.reversed"
        | "transfer.updated"
        | "treasury.credit_reversal.created"
        | "treasury.credit_reversal.posted"
        | "treasury.debit_reversal.completed"
        | "treasury.debit_reversal.created"
        | "treasury.debit_reversal.initial_credit_granted"
        | "treasury.financial_account.closed"
        | "treasury.financial_account.created"
        | "treasury.financial_account.features_status_updated"
        | "treasury.inbound_transfer.canceled"
        | "treasury.inbound_transfer.created"
        | "treasury.inbound_transfer.failed"
        | "treasury.inbound_transfer.succeeded"
        | "treasury.outbound_payment.canceled"
        | "treasury.outbound_payment.created"
        | "treasury.outbound_payment.expected_arrival_date_updated"
        | "treasury.outbound_payment.failed"
        | "treasury.outbound_payment.posted"
        | "treasury.outbound_payment.returned"
        | "treasury.outbound_payment.tracking_details_updated"
        | "treasury.outbound_transfer.canceled"
        | "treasury.outbound_transfer.created"
        | "treasury.outbound_transfer.expected_arrival_date_updated"
        | "treasury.outbound_transfer.failed"
        | "treasury.outbound_transfer.posted"
        | "treasury.outbound_transfer.returned"
        | "treasury.outbound_transfer.tracking_details_updated"
        | "treasury.received_credit.created"
        | "treasury.received_credit.failed"
        | "treasury.received_credit.succeeded"
        | "treasury.received_debit.created"
      )[]
    | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$WebhookEndpointsUpdateBodyMetadataObj0 | string)
    | undefined;
  url?: string | undefined;

  [additionalProperty: string]:
    | ((string | string) | undefined)
    | (boolean | undefined)
    | (
        | (
            | "*"
            | "account.application.authorized"
            | "account.application.deauthorized"
            | "account.external_account.created"
            | "account.external_account.deleted"
            | "account.external_account.updated"
            | "account.updated"
            | "application_fee.created"
            | "application_fee.refund.updated"
            | "application_fee.refunded"
            | "balance.available"
            | "billing.alert.triggered"
            | "billing_portal.configuration.created"
            | "billing_portal.configuration.updated"
            | "billing_portal.session.created"
            | "capability.updated"
            | "cash_balance.funds_available"
            | "charge.captured"
            | "charge.dispute.closed"
            | "charge.dispute.created"
            | "charge.dispute.funds_reinstated"
            | "charge.dispute.funds_withdrawn"
            | "charge.dispute.updated"
            | "charge.expired"
            | "charge.failed"
            | "charge.pending"
            | "charge.refund.updated"
            | "charge.refunded"
            | "charge.succeeded"
            | "charge.updated"
            | "checkout.session.async_payment_failed"
            | "checkout.session.async_payment_succeeded"
            | "checkout.session.completed"
            | "checkout.session.expired"
            | "climate.order.canceled"
            | "climate.order.created"
            | "climate.order.delayed"
            | "climate.order.delivered"
            | "climate.order.product_substituted"
            | "climate.product.created"
            | "climate.product.pricing_updated"
            | "coupon.created"
            | "coupon.deleted"
            | "coupon.updated"
            | "credit_note.created"
            | "credit_note.updated"
            | "credit_note.voided"
            | "customer.created"
            | "customer.deleted"
            | "customer.discount.created"
            | "customer.discount.deleted"
            | "customer.discount.updated"
            | "customer.source.created"
            | "customer.source.deleted"
            | "customer.source.expiring"
            | "customer.source.updated"
            | "customer.subscription.created"
            | "customer.subscription.deleted"
            | "customer.subscription.paused"
            | "customer.subscription.pending_update_applied"
            | "customer.subscription.pending_update_expired"
            | "customer.subscription.resumed"
            | "customer.subscription.trial_will_end"
            | "customer.subscription.updated"
            | "customer.tax_id.created"
            | "customer.tax_id.deleted"
            | "customer.tax_id.updated"
            | "customer.updated"
            | "customer_cash_balance_transaction.created"
            | "entitlements.active_entitlement_summary.updated"
            | "file.created"
            | "financial_connections.account.created"
            | "financial_connections.account.deactivated"
            | "financial_connections.account.disconnected"
            | "financial_connections.account.reactivated"
            | "financial_connections.account.refreshed_balance"
            | "financial_connections.account.refreshed_ownership"
            | "financial_connections.account.refreshed_transactions"
            | "identity.verification_session.canceled"
            | "identity.verification_session.created"
            | "identity.verification_session.processing"
            | "identity.verification_session.redacted"
            | "identity.verification_session.requires_input"
            | "identity.verification_session.verified"
            | "invoice.created"
            | "invoice.deleted"
            | "invoice.finalization_failed"
            | "invoice.finalized"
            | "invoice.marked_uncollectible"
            | "invoice.overdue"
            | "invoice.overpaid"
            | "invoice.paid"
            | "invoice.payment_action_required"
            | "invoice.payment_failed"
            | "invoice.payment_succeeded"
            | "invoice.sent"
            | "invoice.upcoming"
            | "invoice.updated"
            | "invoice.voided"
            | "invoice.will_be_due"
            | "invoiceitem.created"
            | "invoiceitem.deleted"
            | "issuing_authorization.created"
            | "issuing_authorization.request"
            | "issuing_authorization.updated"
            | "issuing_card.created"
            | "issuing_card.updated"
            | "issuing_cardholder.created"
            | "issuing_cardholder.updated"
            | "issuing_dispute.closed"
            | "issuing_dispute.created"
            | "issuing_dispute.funds_reinstated"
            | "issuing_dispute.funds_rescinded"
            | "issuing_dispute.submitted"
            | "issuing_dispute.updated"
            | "issuing_personalization_design.activated"
            | "issuing_personalization_design.deactivated"
            | "issuing_personalization_design.rejected"
            | "issuing_personalization_design.updated"
            | "issuing_token.created"
            | "issuing_token.updated"
            | "issuing_transaction.created"
            | "issuing_transaction.purchase_details_receipt_updated"
            | "issuing_transaction.updated"
            | "mandate.updated"
            | "payment_intent.amount_capturable_updated"
            | "payment_intent.canceled"
            | "payment_intent.created"
            | "payment_intent.partially_funded"
            | "payment_intent.payment_failed"
            | "payment_intent.processing"
            | "payment_intent.requires_action"
            | "payment_intent.succeeded"
            | "payment_link.created"
            | "payment_link.updated"
            | "payment_method.attached"
            | "payment_method.automatically_updated"
            | "payment_method.detached"
            | "payment_method.updated"
            | "payout.canceled"
            | "payout.created"
            | "payout.failed"
            | "payout.paid"
            | "payout.reconciliation_completed"
            | "payout.updated"
            | "person.created"
            | "person.deleted"
            | "person.updated"
            | "plan.created"
            | "plan.deleted"
            | "plan.updated"
            | "price.created"
            | "price.deleted"
            | "price.updated"
            | "product.created"
            | "product.deleted"
            | "product.updated"
            | "promotion_code.created"
            | "promotion_code.updated"
            | "quote.accepted"
            | "quote.canceled"
            | "quote.created"
            | "quote.finalized"
            | "radar.early_fraud_warning.created"
            | "radar.early_fraud_warning.updated"
            | "refund.created"
            | "refund.failed"
            | "refund.updated"
            | "reporting.report_run.failed"
            | "reporting.report_run.succeeded"
            | "reporting.report_type.updated"
            | "review.closed"
            | "review.opened"
            | "setup_intent.canceled"
            | "setup_intent.created"
            | "setup_intent.requires_action"
            | "setup_intent.setup_failed"
            | "setup_intent.succeeded"
            | "sigma.scheduled_query_run.created"
            | "source.canceled"
            | "source.chargeable"
            | "source.failed"
            | "source.mandate_notification"
            | "source.refund_attributes_required"
            | "source.transaction.created"
            | "source.transaction.updated"
            | "subscription_schedule.aborted"
            | "subscription_schedule.canceled"
            | "subscription_schedule.completed"
            | "subscription_schedule.created"
            | "subscription_schedule.expiring"
            | "subscription_schedule.released"
            | "subscription_schedule.updated"
            | "tax.settings.updated"
            | "tax_rate.created"
            | "tax_rate.updated"
            | "terminal.reader.action_failed"
            | "terminal.reader.action_succeeded"
            | "test_helpers.test_clock.advancing"
            | "test_helpers.test_clock.created"
            | "test_helpers.test_clock.deleted"
            | "test_helpers.test_clock.internal_failure"
            | "test_helpers.test_clock.ready"
            | "topup.canceled"
            | "topup.created"
            | "topup.failed"
            | "topup.reversed"
            | "topup.succeeded"
            | "transfer.created"
            | "transfer.reversed"
            | "transfer.updated"
            | "treasury.credit_reversal.created"
            | "treasury.credit_reversal.posted"
            | "treasury.debit_reversal.completed"
            | "treasury.debit_reversal.created"
            | "treasury.debit_reversal.initial_credit_granted"
            | "treasury.financial_account.closed"
            | "treasury.financial_account.created"
            | "treasury.financial_account.features_status_updated"
            | "treasury.inbound_transfer.canceled"
            | "treasury.inbound_transfer.created"
            | "treasury.inbound_transfer.failed"
            | "treasury.inbound_transfer.succeeded"
            | "treasury.outbound_payment.canceled"
            | "treasury.outbound_payment.created"
            | "treasury.outbound_payment.expected_arrival_date_updated"
            | "treasury.outbound_payment.failed"
            | "treasury.outbound_payment.posted"
            | "treasury.outbound_payment.returned"
            | "treasury.outbound_payment.tracking_details_updated"
            | "treasury.outbound_transfer.canceled"
            | "treasury.outbound_transfer.created"
            | "treasury.outbound_transfer.expected_arrival_date_updated"
            | "treasury.outbound_transfer.failed"
            | "treasury.outbound_transfer.posted"
            | "treasury.outbound_transfer.returned"
            | "treasury.outbound_transfer.tracking_details_updated"
            | "treasury.received_credit.created"
            | "treasury.received_credit.failed"
            | "treasury.received_credit.succeeded"
            | "treasury.received_debit.created"
          )[]
        | undefined
      )
    | (string[] | undefined)
    | ((External$WebhookEndpointsUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | External$WebhookEndpointsUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object WebhookEndpointsUpdateBody
 */
const SchemaIn$WebhookEndpointsUpdateBody: z.ZodType<
  WebhookEndpointsUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.union([z.string(), z.string()]).optional(),
    disabled: z.boolean().optional(),
    enabled_events: z
      .array(
        z.enum([
          "*",
          "account.application.authorized",
          "account.application.deauthorized",
          "account.external_account.created",
          "account.external_account.deleted",
          "account.external_account.updated",
          "account.updated",
          "application_fee.created",
          "application_fee.refund.updated",
          "application_fee.refunded",
          "balance.available",
          "billing.alert.triggered",
          "billing_portal.configuration.created",
          "billing_portal.configuration.updated",
          "billing_portal.session.created",
          "capability.updated",
          "cash_balance.funds_available",
          "charge.captured",
          "charge.dispute.closed",
          "charge.dispute.created",
          "charge.dispute.funds_reinstated",
          "charge.dispute.funds_withdrawn",
          "charge.dispute.updated",
          "charge.expired",
          "charge.failed",
          "charge.pending",
          "charge.refund.updated",
          "charge.refunded",
          "charge.succeeded",
          "charge.updated",
          "checkout.session.async_payment_failed",
          "checkout.session.async_payment_succeeded",
          "checkout.session.completed",
          "checkout.session.expired",
          "climate.order.canceled",
          "climate.order.created",
          "climate.order.delayed",
          "climate.order.delivered",
          "climate.order.product_substituted",
          "climate.product.created",
          "climate.product.pricing_updated",
          "coupon.created",
          "coupon.deleted",
          "coupon.updated",
          "credit_note.created",
          "credit_note.updated",
          "credit_note.voided",
          "customer.created",
          "customer.deleted",
          "customer.discount.created",
          "customer.discount.deleted",
          "customer.discount.updated",
          "customer.source.created",
          "customer.source.deleted",
          "customer.source.expiring",
          "customer.source.updated",
          "customer.subscription.created",
          "customer.subscription.deleted",
          "customer.subscription.paused",
          "customer.subscription.pending_update_applied",
          "customer.subscription.pending_update_expired",
          "customer.subscription.resumed",
          "customer.subscription.trial_will_end",
          "customer.subscription.updated",
          "customer.tax_id.created",
          "customer.tax_id.deleted",
          "customer.tax_id.updated",
          "customer.updated",
          "customer_cash_balance_transaction.created",
          "entitlements.active_entitlement_summary.updated",
          "file.created",
          "financial_connections.account.created",
          "financial_connections.account.deactivated",
          "financial_connections.account.disconnected",
          "financial_connections.account.reactivated",
          "financial_connections.account.refreshed_balance",
          "financial_connections.account.refreshed_ownership",
          "financial_connections.account.refreshed_transactions",
          "identity.verification_session.canceled",
          "identity.verification_session.created",
          "identity.verification_session.processing",
          "identity.verification_session.redacted",
          "identity.verification_session.requires_input",
          "identity.verification_session.verified",
          "invoice.created",
          "invoice.deleted",
          "invoice.finalization_failed",
          "invoice.finalized",
          "invoice.marked_uncollectible",
          "invoice.overdue",
          "invoice.overpaid",
          "invoice.paid",
          "invoice.payment_action_required",
          "invoice.payment_failed",
          "invoice.payment_succeeded",
          "invoice.sent",
          "invoice.upcoming",
          "invoice.updated",
          "invoice.voided",
          "invoice.will_be_due",
          "invoiceitem.created",
          "invoiceitem.deleted",
          "issuing_authorization.created",
          "issuing_authorization.request",
          "issuing_authorization.updated",
          "issuing_card.created",
          "issuing_card.updated",
          "issuing_cardholder.created",
          "issuing_cardholder.updated",
          "issuing_dispute.closed",
          "issuing_dispute.created",
          "issuing_dispute.funds_reinstated",
          "issuing_dispute.funds_rescinded",
          "issuing_dispute.submitted",
          "issuing_dispute.updated",
          "issuing_personalization_design.activated",
          "issuing_personalization_design.deactivated",
          "issuing_personalization_design.rejected",
          "issuing_personalization_design.updated",
          "issuing_token.created",
          "issuing_token.updated",
          "issuing_transaction.created",
          "issuing_transaction.purchase_details_receipt_updated",
          "issuing_transaction.updated",
          "mandate.updated",
          "payment_intent.amount_capturable_updated",
          "payment_intent.canceled",
          "payment_intent.created",
          "payment_intent.partially_funded",
          "payment_intent.payment_failed",
          "payment_intent.processing",
          "payment_intent.requires_action",
          "payment_intent.succeeded",
          "payment_link.created",
          "payment_link.updated",
          "payment_method.attached",
          "payment_method.automatically_updated",
          "payment_method.detached",
          "payment_method.updated",
          "payout.canceled",
          "payout.created",
          "payout.failed",
          "payout.paid",
          "payout.reconciliation_completed",
          "payout.updated",
          "person.created",
          "person.deleted",
          "person.updated",
          "plan.created",
          "plan.deleted",
          "plan.updated",
          "price.created",
          "price.deleted",
          "price.updated",
          "product.created",
          "product.deleted",
          "product.updated",
          "promotion_code.created",
          "promotion_code.updated",
          "quote.accepted",
          "quote.canceled",
          "quote.created",
          "quote.finalized",
          "radar.early_fraud_warning.created",
          "radar.early_fraud_warning.updated",
          "refund.created",
          "refund.failed",
          "refund.updated",
          "reporting.report_run.failed",
          "reporting.report_run.succeeded",
          "reporting.report_type.updated",
          "review.closed",
          "review.opened",
          "setup_intent.canceled",
          "setup_intent.created",
          "setup_intent.requires_action",
          "setup_intent.setup_failed",
          "setup_intent.succeeded",
          "sigma.scheduled_query_run.created",
          "source.canceled",
          "source.chargeable",
          "source.failed",
          "source.mandate_notification",
          "source.refund_attributes_required",
          "source.transaction.created",
          "source.transaction.updated",
          "subscription_schedule.aborted",
          "subscription_schedule.canceled",
          "subscription_schedule.completed",
          "subscription_schedule.created",
          "subscription_schedule.expiring",
          "subscription_schedule.released",
          "subscription_schedule.updated",
          "tax.settings.updated",
          "tax_rate.created",
          "tax_rate.updated",
          "terminal.reader.action_failed",
          "terminal.reader.action_succeeded",
          "test_helpers.test_clock.advancing",
          "test_helpers.test_clock.created",
          "test_helpers.test_clock.deleted",
          "test_helpers.test_clock.internal_failure",
          "test_helpers.test_clock.ready",
          "topup.canceled",
          "topup.created",
          "topup.failed",
          "topup.reversed",
          "topup.succeeded",
          "transfer.created",
          "transfer.reversed",
          "transfer.updated",
          "treasury.credit_reversal.created",
          "treasury.credit_reversal.posted",
          "treasury.debit_reversal.completed",
          "treasury.debit_reversal.created",
          "treasury.debit_reversal.initial_credit_granted",
          "treasury.financial_account.closed",
          "treasury.financial_account.created",
          "treasury.financial_account.features_status_updated",
          "treasury.inbound_transfer.canceled",
          "treasury.inbound_transfer.created",
          "treasury.inbound_transfer.failed",
          "treasury.inbound_transfer.succeeded",
          "treasury.outbound_payment.canceled",
          "treasury.outbound_payment.created",
          "treasury.outbound_payment.expected_arrival_date_updated",
          "treasury.outbound_payment.failed",
          "treasury.outbound_payment.posted",
          "treasury.outbound_payment.returned",
          "treasury.outbound_payment.tracking_details_updated",
          "treasury.outbound_transfer.canceled",
          "treasury.outbound_transfer.created",
          "treasury.outbound_transfer.expected_arrival_date_updated",
          "treasury.outbound_transfer.failed",
          "treasury.outbound_transfer.posted",
          "treasury.outbound_transfer.returned",
          "treasury.outbound_transfer.tracking_details_updated",
          "treasury.received_credit.created",
          "treasury.received_credit.failed",
          "treasury.received_credit.succeeded",
          "treasury.received_debit.created",
        ]),
      )
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$WebhookEndpointsUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    url: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      disabled: "disabled",
      enabled_events: "enabledEvents",
      expand: "expand",
      metadata: "metadata",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$WebhookEndpointsUpdateBody
 */
const SchemaOut$WebhookEndpointsUpdateBody: z.ZodType<
  External$WebhookEndpointsUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  WebhookEndpointsUpdateBody // the object to be transformed
> = z
  .object({
    description: z.union([z.string(), z.string()]).optional(),
    disabled: z.boolean().optional(),
    enabledEvents: z
      .array(
        z.enum([
          "*",
          "account.application.authorized",
          "account.application.deauthorized",
          "account.external_account.created",
          "account.external_account.deleted",
          "account.external_account.updated",
          "account.updated",
          "application_fee.created",
          "application_fee.refund.updated",
          "application_fee.refunded",
          "balance.available",
          "billing.alert.triggered",
          "billing_portal.configuration.created",
          "billing_portal.configuration.updated",
          "billing_portal.session.created",
          "capability.updated",
          "cash_balance.funds_available",
          "charge.captured",
          "charge.dispute.closed",
          "charge.dispute.created",
          "charge.dispute.funds_reinstated",
          "charge.dispute.funds_withdrawn",
          "charge.dispute.updated",
          "charge.expired",
          "charge.failed",
          "charge.pending",
          "charge.refund.updated",
          "charge.refunded",
          "charge.succeeded",
          "charge.updated",
          "checkout.session.async_payment_failed",
          "checkout.session.async_payment_succeeded",
          "checkout.session.completed",
          "checkout.session.expired",
          "climate.order.canceled",
          "climate.order.created",
          "climate.order.delayed",
          "climate.order.delivered",
          "climate.order.product_substituted",
          "climate.product.created",
          "climate.product.pricing_updated",
          "coupon.created",
          "coupon.deleted",
          "coupon.updated",
          "credit_note.created",
          "credit_note.updated",
          "credit_note.voided",
          "customer.created",
          "customer.deleted",
          "customer.discount.created",
          "customer.discount.deleted",
          "customer.discount.updated",
          "customer.source.created",
          "customer.source.deleted",
          "customer.source.expiring",
          "customer.source.updated",
          "customer.subscription.created",
          "customer.subscription.deleted",
          "customer.subscription.paused",
          "customer.subscription.pending_update_applied",
          "customer.subscription.pending_update_expired",
          "customer.subscription.resumed",
          "customer.subscription.trial_will_end",
          "customer.subscription.updated",
          "customer.tax_id.created",
          "customer.tax_id.deleted",
          "customer.tax_id.updated",
          "customer.updated",
          "customer_cash_balance_transaction.created",
          "entitlements.active_entitlement_summary.updated",
          "file.created",
          "financial_connections.account.created",
          "financial_connections.account.deactivated",
          "financial_connections.account.disconnected",
          "financial_connections.account.reactivated",
          "financial_connections.account.refreshed_balance",
          "financial_connections.account.refreshed_ownership",
          "financial_connections.account.refreshed_transactions",
          "identity.verification_session.canceled",
          "identity.verification_session.created",
          "identity.verification_session.processing",
          "identity.verification_session.redacted",
          "identity.verification_session.requires_input",
          "identity.verification_session.verified",
          "invoice.created",
          "invoice.deleted",
          "invoice.finalization_failed",
          "invoice.finalized",
          "invoice.marked_uncollectible",
          "invoice.overdue",
          "invoice.overpaid",
          "invoice.paid",
          "invoice.payment_action_required",
          "invoice.payment_failed",
          "invoice.payment_succeeded",
          "invoice.sent",
          "invoice.upcoming",
          "invoice.updated",
          "invoice.voided",
          "invoice.will_be_due",
          "invoiceitem.created",
          "invoiceitem.deleted",
          "issuing_authorization.created",
          "issuing_authorization.request",
          "issuing_authorization.updated",
          "issuing_card.created",
          "issuing_card.updated",
          "issuing_cardholder.created",
          "issuing_cardholder.updated",
          "issuing_dispute.closed",
          "issuing_dispute.created",
          "issuing_dispute.funds_reinstated",
          "issuing_dispute.funds_rescinded",
          "issuing_dispute.submitted",
          "issuing_dispute.updated",
          "issuing_personalization_design.activated",
          "issuing_personalization_design.deactivated",
          "issuing_personalization_design.rejected",
          "issuing_personalization_design.updated",
          "issuing_token.created",
          "issuing_token.updated",
          "issuing_transaction.created",
          "issuing_transaction.purchase_details_receipt_updated",
          "issuing_transaction.updated",
          "mandate.updated",
          "payment_intent.amount_capturable_updated",
          "payment_intent.canceled",
          "payment_intent.created",
          "payment_intent.partially_funded",
          "payment_intent.payment_failed",
          "payment_intent.processing",
          "payment_intent.requires_action",
          "payment_intent.succeeded",
          "payment_link.created",
          "payment_link.updated",
          "payment_method.attached",
          "payment_method.automatically_updated",
          "payment_method.detached",
          "payment_method.updated",
          "payout.canceled",
          "payout.created",
          "payout.failed",
          "payout.paid",
          "payout.reconciliation_completed",
          "payout.updated",
          "person.created",
          "person.deleted",
          "person.updated",
          "plan.created",
          "plan.deleted",
          "plan.updated",
          "price.created",
          "price.deleted",
          "price.updated",
          "product.created",
          "product.deleted",
          "product.updated",
          "promotion_code.created",
          "promotion_code.updated",
          "quote.accepted",
          "quote.canceled",
          "quote.created",
          "quote.finalized",
          "radar.early_fraud_warning.created",
          "radar.early_fraud_warning.updated",
          "refund.created",
          "refund.failed",
          "refund.updated",
          "reporting.report_run.failed",
          "reporting.report_run.succeeded",
          "reporting.report_type.updated",
          "review.closed",
          "review.opened",
          "setup_intent.canceled",
          "setup_intent.created",
          "setup_intent.requires_action",
          "setup_intent.setup_failed",
          "setup_intent.succeeded",
          "sigma.scheduled_query_run.created",
          "source.canceled",
          "source.chargeable",
          "source.failed",
          "source.mandate_notification",
          "source.refund_attributes_required",
          "source.transaction.created",
          "source.transaction.updated",
          "subscription_schedule.aborted",
          "subscription_schedule.canceled",
          "subscription_schedule.completed",
          "subscription_schedule.created",
          "subscription_schedule.expiring",
          "subscription_schedule.released",
          "subscription_schedule.updated",
          "tax.settings.updated",
          "tax_rate.created",
          "tax_rate.updated",
          "terminal.reader.action_failed",
          "terminal.reader.action_succeeded",
          "test_helpers.test_clock.advancing",
          "test_helpers.test_clock.created",
          "test_helpers.test_clock.deleted",
          "test_helpers.test_clock.internal_failure",
          "test_helpers.test_clock.ready",
          "topup.canceled",
          "topup.created",
          "topup.failed",
          "topup.reversed",
          "topup.succeeded",
          "transfer.created",
          "transfer.reversed",
          "transfer.updated",
          "treasury.credit_reversal.created",
          "treasury.credit_reversal.posted",
          "treasury.debit_reversal.completed",
          "treasury.debit_reversal.created",
          "treasury.debit_reversal.initial_credit_granted",
          "treasury.financial_account.closed",
          "treasury.financial_account.created",
          "treasury.financial_account.features_status_updated",
          "treasury.inbound_transfer.canceled",
          "treasury.inbound_transfer.created",
          "treasury.inbound_transfer.failed",
          "treasury.inbound_transfer.succeeded",
          "treasury.outbound_payment.canceled",
          "treasury.outbound_payment.created",
          "treasury.outbound_payment.expected_arrival_date_updated",
          "treasury.outbound_payment.failed",
          "treasury.outbound_payment.posted",
          "treasury.outbound_payment.returned",
          "treasury.outbound_payment.tracking_details_updated",
          "treasury.outbound_transfer.canceled",
          "treasury.outbound_transfer.created",
          "treasury.outbound_transfer.expected_arrival_date_updated",
          "treasury.outbound_transfer.failed",
          "treasury.outbound_transfer.posted",
          "treasury.outbound_transfer.returned",
          "treasury.outbound_transfer.tracking_details_updated",
          "treasury.received_credit.created",
          "treasury.received_credit.failed",
          "treasury.received_credit.succeeded",
          "treasury.received_debit.created",
        ]),
      )
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$WebhookEndpointsUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    url: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      disabled: "disabled",
      enabledEvents: "enabled_events",
      expand: "expand",
      metadata: "metadata",
      url: "url",
    });
  });

export const Schemas$WebhookEndpointsUpdateBody = {
  in: SchemaIn$WebhookEndpointsUpdateBody,
  out: SchemaOut$WebhookEndpointsUpdateBody,
};
